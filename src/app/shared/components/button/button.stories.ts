import type { Meta, StoryObj } from '@storybook/angular'
import { ButtonComponent } from './button.component'

const meta: Meta<ButtonComponent> = {
	title: 'Components/Button',
	component: ButtonComponent,
	tags: ['autodocs'],
	render: (args) => ({
		props: args,
		template: `<app-button>My Button</app-button>`
	})
}

export default meta
type Story = StoryObj<ButtonComponent>

export const Primary: Story = {
	args: {
		props: {
			type: 'button',
			variant: 'default',
			size: 'default'
		}
	}
}
