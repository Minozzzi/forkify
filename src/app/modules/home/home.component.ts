import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LucideAngularModule } from 'lucide-angular'

import { ITEMS_PER_PAGE } from '../../core/constants/pagination'

import type { RecipeModel } from '../../domain/models/recipe.model'

import { RecipeService } from '../../data/use-cases/recipe.use-case'

import { ButtonComponent } from '../../shared/components/button/button.component'
import { CardListComponent } from '../../shared/components/card-list/card-list.component'
import { CardComponent } from '../../shared/components/card/card.component'
import { LoadingComponent } from '../../shared/components/loading/loading.component'
import { InputComponent } from '../../shared/components/input/input.component'
import { PaginationComponent } from '../../shared/components/pagination/pagination.component'

import type { CardListProps } from '../../shared/components/card-list/card-list.interface'
import type { CardProps } from '../../shared/components/card/card.interface'
import type { InputProps } from '../../shared/components/input/input.interface'
import type { ButtonProps } from '../../shared/components/button/button.interface'
import type { PaginationProps } from '../../shared/components/pagination/pagination.interface'

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [
		CommonModule,
		LucideAngularModule,
		CardListComponent,
		CardComponent,
		InputComponent,
		ButtonComponent,
		LoadingComponent,
		PaginationComponent
	],
	providers: [RecipeService],
	templateUrl: './home.component.html'
})
export class HomeComponent {
	public searchValue = ''
	public loadingRecipes = false
	public loadingRecipe = false
	public recipes: RecipeModel[] = []
	public totalPages: number = 0
	public page = 1

	public ingredients: { name: string; quantity: string; unit: string }[] = []
	public quantityValue = ''
	public unitValue = ''
	public ingredientValue = ''

	public whatsAppNumber = ''

	public cardListProps: CardListProps = {
		items: []
	}

	public cardProps: CardProps = {} as CardProps

	public inputProps: InputProps = {
		value: this.searchValue,
		placeholder: 'Search Recipes',
		type: 'text'
	}

	public buttonProps: ButtonProps = {
		size: 'default',
		type: 'button',
		variant: 'default',
		className: 'rounded-full -translate-x-10'
	}

	public paginationProps: PaginationProps = {
		hasPreviousPage: false,
		hasNextPage: false,
		previousPage: 1,
		nextPage: 2,
		onClickPreviousPage: () => {
			if (this.page === 1 || !this.cardListProps.items.length) return
			this.page -= 1
			this.paginateRecipes(this.recipes, this.totalPages)
		},
		onClickNextPage: () => {
			if (this.totalPages === this.page || !this.cardListProps.items.length)
				return
			this.page += 1
			this.paginateRecipes(this.recipes, this.totalPages)
		}
	}

	constructor(private readonly recipeService: RecipeService) {}

	public handleSearch(event: Event) {
		const value = (event.target as HTMLInputElement).value
		this.searchValue = value
	}

	public onSearchKeyDown(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			this.getRecipes()
		}
	}

	public handleSubmitSearch() {
		this.getRecipes()
	}

	public handleChangeIngredient(
		key: 'name' | 'quantity' | 'unit',
		event: Event
	) {
		const value = (event.target as HTMLInputElement).value

		switch (key) {
			case 'name':
				this.ingredientValue = value
				break
			case 'quantity':
				this.quantityValue = value
				break
			case 'unit':
				this.unitValue = value
				break
			default:
				break
		}
	}

	public handleChangeWppNumber(event: Event) {
		const value = (event.target as HTMLInputElement).value
		this.whatsAppNumber = value
	}

	public addIngredient() {
		this.ingredients = [
			...this.ingredients,
			{
				quantity: this.quantityValue,
				name: this.ingredientValue,
				unit: this.unitValue
			}
		]
		console.log('this.ingredients: ', this.ingredients)

		this.quantityValue = ''
		this.ingredientValue = ''
		this.unitValue = ''
	}

	public sendIngredientsList() {
		if (!this.whatsAppNumber) {
			alert('Please add your WhatsApp number')
			return
		}

		const message = this.ingredients
			.map(
				(ingredient) =>
					`- ${ingredient.name} - ${ingredient.quantity} ${ingredient.unit}`
			)
			.join('\n')
		const url = `https://wa.me/${this.whatsAppNumber}?text=${message}`
		window.open(url, '_blank')
	}

	private paginateRecipes(recipes: RecipeModel[], totalPages: number) {
		const startIndex = (this.page - 1) * ITEMS_PER_PAGE
		const endIndex =
			this.page === totalPages
				? startIndex + (this.recipes.length % ITEMS_PER_PAGE)
				: startIndex + ITEMS_PER_PAGE

		this.cardListProps.items = recipes
			.slice(startIndex, endIndex)
			.map((recipe) => ({
				...recipe,
				isSelected: recipe.id === this.cardProps.id,
				onClick: (id) => {
					this.getRecipe(id)
				}
			}))

		this.updatePaginationProps()
	}

	private updatePaginationProps() {
		this.paginationProps.hasPreviousPage = this.page > 1
		this.paginationProps.hasNextPage = this.page < this.totalPages
		this.paginationProps.previousPage = Math.max(this.page - 1, 1)
		this.paginationProps.nextPage = this.page + 1
	}

	private getRecipes() {
		this.loadingRecipes = true

		this.recipeService.getRecipes(this.searchValue).subscribe((data) => {
			this.recipes = data.recipes
			this.totalPages = Math.ceil(data.results / ITEMS_PER_PAGE)
			this.paginateRecipes(data.recipes, this.totalPages)

			this.loadingRecipes = false
		})
	}

	private getRecipe(id: string) {
		this.loadingRecipe = true

		this.recipeService
			.getRecipe(id)
			.subscribe(
				({
					id,
					cookingTime,
					image,
					ingredients,
					servings,
					subTitle,
					title
				}) => {
					this.cardProps = {
						...this.cardProps,
						id,
						cookingTime,
						image,
						ingredients,
						servings,
						subTitle,
						title
					}
					this.loadingRecipe = false
				}
			)
	}
}
