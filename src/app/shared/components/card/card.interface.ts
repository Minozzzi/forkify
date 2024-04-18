type Ingredient = {
	quantity: number | null
	unit: string | null
	description: string
}

export interface CardProps {
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

	className?: string
}
