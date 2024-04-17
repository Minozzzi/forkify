export interface PaginationProps {
	hasPreviousPage: boolean
	hasNextPage: boolean
	previousPage: number
	nextPage: number
	onClickPreviousPage: () => void
	onClickNextPage: () => void
}
