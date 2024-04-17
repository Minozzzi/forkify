type Item = {
	id: string
	title: string
	imageUrl: string
	publisher: string
}

export interface CardListProps {
	items: Item[]
	className?: string
}
