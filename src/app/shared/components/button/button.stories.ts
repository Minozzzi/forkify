import type { Meta, StoryObj } from '@storybook/angular'
import { fn } from '@storybook/test'
import { ButtonComponent } from './button.component'

const meta: Meta<ButtonComponent> = {
	title: 'Components/Button',
	component: ButtonComponent,
	tags: ['autodocs'],
	render: (args) => ({
		props: args,
		template: `<app-button>My Button</app-button>`
	}),
	args: { handleOnClick: fn() }
}

export default meta
type Story = StoryObj<ButtonComponent>

export const Primary: Story = {
	args: {
		buttonProps: {
			type: 'button',
			variant: 'default',
			size: 'default'
		}
	}
}
