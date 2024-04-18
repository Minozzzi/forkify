import { Observable } from 'rxjs'
import { RecipeDetailModel, RecipeModel } from '../models/recipe.model'

export type GetRecipesResponse = {
	recipes: RecipeModel[]
	results: number
}

export interface IRecipeService {
	getRecipes: (searchValue: string) => Observable<GetRecipesResponse>
	getRecipe: (id: string) => Observable<RecipeDetailModel>
}
