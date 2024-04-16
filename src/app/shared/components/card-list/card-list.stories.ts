import type { Meta, StoryObj } from '@storybook/angular'
import { CardListComponent } from './card-list.component'

const meta: Meta<CardListComponent> = {
	title: 'Components/CardList',
	component: CardListComponent,
	tags: ['autodocs']
}

export default meta
type Story = StoryObj<CardListComponent>

export const Primary: Story = {
	args: {
		cardListProps: {
			items: [
				{
					publisher: '101 Cookbooks',
					title: 'Best Pizza Dough Ever',
					imageUrl:
						'http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg'
				},
				{
					publisher: 'The Pioneer Woman',
					title: 'Deep Dish Fruit Pizza',
					imageUrl: 'http://forkify-api.herokuapp.com/images/fruitpizza9a19.jpg'
				},
				{
					publisher: 'Closet Cooking',
					title: 'Pizza Dip',
					imageUrl:
						'http://forkify-api.herokuapp.com/images/Pizza2BDip2B12B500c4c0a26c.jpg'
				}
			]
		}
	}
}
