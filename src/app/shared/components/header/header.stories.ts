import type { Meta, StoryObj } from '@storybook/angular'
import { HeaderComponent } from './header.component'

const meta: Meta<HeaderComponent> = {
  title: 'Components/Header',
  component: HeaderComponent,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<HeaderComponent>

export const Primary: Story = {}
