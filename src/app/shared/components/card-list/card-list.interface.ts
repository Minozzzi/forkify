import type { VariantProps } from 'tailwind-variants'

import { cardListStyles } from './card-list.component.styles'

type Item = {
	id: string
	title: string
	imageUrl: string
	publisher: string
	isSelected: boolean
	onClick: (id: string) => void
} & VariantProps<typeof cardListStyles>

export interface CardListProps {
	items: Item[]
	className?: string
}
