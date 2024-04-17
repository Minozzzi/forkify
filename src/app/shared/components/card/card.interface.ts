type Ingredient = {
	quantity: string | null
	unit: string | null
	description: string
}

export interface CardProps extends HTMLDivElement {
	image: {
		url: string
		alt: string
	}
	title: string
	cookingTime: string
	servings: string
	subTitle: string
	ingredients: Ingredient[]
}
