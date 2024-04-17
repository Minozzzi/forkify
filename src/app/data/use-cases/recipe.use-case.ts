/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import {
	GetRecipesResponse,
	IRecipeService
} from '../../domain/use-cases/recipe.use-case'
import { map } from 'rxjs'
import { RecipeModel } from '../../domain/models/recipe.model'

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
}
