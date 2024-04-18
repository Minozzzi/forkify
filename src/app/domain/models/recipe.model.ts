export type RecipeModel = {
	id: string
	publisher: string
	imageUrl: string
	title: string
}

type Ingredient = {
	quantity: number | null
	unit: string | null
	description: string
}

export type RecipeDetailModel = {
	id: string
	image: {
		url: string
		alt: string
	}
	title: string
	cookingTime: number
	servings: number
	subTitle: string
	ingredients: Ingredient[]
}
