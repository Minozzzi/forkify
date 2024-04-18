/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import {
	GetRecipesResponse,
	IRecipeService
} from '../../domain/use-cases/recipe.use-case'
import { map } from 'rxjs'
import type {
	RecipeDetailModel,
	RecipeModel
} from '../../domain/models/recipe.model'

@Injectable({
	providedIn: 'root'
})
export class RecipeService implements IRecipeService {
	private readonly url = 'https://forkify-api.herokuapp.com/api/v2/recipes'

	constructor(private readonly httpClient: HttpClient) {}

	getRecipes: IRecipeService['getRecipes'] = (searchValue) => {
		return this.httpClient.get(`${this.url}?search=${searchValue}`).pipe(
			map(
				(response: any) =>
					({
						recipes:
							response.data.recipes.map(
								(recipe: any) =>
									({
										id: recipe.id,
										imageUrl: recipe.image_url,
										publisher: recipe.publisher,
										title: recipe.title
									}) as RecipeModel
							) ?? [],
						results: response.results ?? 0
					}) as GetRecipesResponse
			)
		)
	}

	getRecipe: IRecipeService['getRecipe'] = (id) => {
		return this.httpClient.get(`${this.url}/${id}`).pipe(
			map((response: any) => {
				const { recipe } = response.data

				return {
					id: recipe.id,
					cookingTime: recipe.cooking_time,
					image: {
						url: recipe.image_url,
						alt: 'Recipe image'
					},
					servings: recipe.servings,
					title: recipe.title,
					subTitle: 'Recipe Ingredients',
					ingredients: recipe.ingredients
				} as RecipeDetailModel
			})
		)
	}
}
