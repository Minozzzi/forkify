import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LucideAngularModule } from 'lucide-angular'

import { ITEMS_PER_PAGE } from '../../core/constants/pagination'

import { RecipeModel } from '../../domain/models/recipe.model'

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
	public loading = false
	public recipes: RecipeModel[] = []
	public totalPages: number = 0
	public page = 1

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
			if (this.page === 1) return
			this.page -= 1
			this.paginateRecipes(this.recipes, this.totalPages)
		},
		onClickNextPage: () => {
			if (this.totalPages === this.page) return
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

	private paginateRecipes(recipes: RecipeModel[], totalPages: number) {
		const startIndex = (this.page - 1) * ITEMS_PER_PAGE
		const endIndex =
			this.page === totalPages
				? startIndex + (this.recipes.length % ITEMS_PER_PAGE)
				: startIndex + ITEMS_PER_PAGE

		this.cardListProps.items = recipes.slice(startIndex, endIndex)

		this.updatePaginationProps()
	}

	private updatePaginationProps() {
		this.paginationProps.hasPreviousPage = this.page > 1
		this.paginationProps.hasNextPage = this.page < this.totalPages
		this.paginationProps.previousPage = Math.max(this.page - 1, 1)
		this.paginationProps.nextPage = this.page + 1
	}

	private getRecipes() {
		this.loading = true

		this.recipeService.getRecipes(this.searchValue).subscribe((data) => {
			this.recipes = data.recipes
			this.totalPages = Math.ceil(data.results / ITEMS_PER_PAGE)
			this.paginateRecipes(data.recipes, this.totalPages)

			this.loading = false
		})
	}
}
