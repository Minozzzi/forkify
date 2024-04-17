import type { Meta, StoryObj } from '@storybook/angular'
import { InputComponent } from './input.component'

const meta: Meta<InputComponent> = {
	title: 'Components/Input',
	component: InputComponent,
	tags: ['autodocs']
}

export default meta
type Story = StoryObj<InputComponent>

export const Primary: Story = {
	args: {
		props: {
			value: '',
			placeholder: 'My Input',
			type: 'text'
		}
	}
}
