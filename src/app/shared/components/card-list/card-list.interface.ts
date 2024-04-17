type Item = {
	imageUrl: string
	title: string
	publisher: string
}

export interface CardListProps extends HTMLDivElement {
	items: Item[]
}
