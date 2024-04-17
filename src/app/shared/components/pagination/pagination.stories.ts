import type { Meta, StoryObj } from '@storybook/angular'

import { PaginationComponent } from './pagination.component'

const meta: Meta<PaginationComponent> = {
	title: 'Components/Pagination',
	component: PaginationComponent,
	tags: ['autodocs']
}

export default meta
type Story = StoryObj<PaginationComponent>

export const Primary: Story = {
	args: {
		props: {
			hasPreviousPage: true,
			hasNextPage: true,
			previousPage: 1,
			nextPage: 3,
			onClickPreviousPage: () => {
				alert('clicked previous page :)')
			},
			onClickNextPage: () => {
				alert('clicked next page :)')
			}
		}
	}
}
