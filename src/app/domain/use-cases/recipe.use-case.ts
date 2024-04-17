import { Observable } from 'rxjs'
import { RecipeModel } from '../models/recipe.model'

export type GetRecipesResponse = {
	recipes: RecipeModel[]
	results: number
}

export interface IRecipeService {
	getRecipes: (searchValue: string) => Observable<GetRecipesResponse>
}
