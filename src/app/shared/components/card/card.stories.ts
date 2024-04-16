import type { Meta, StoryObj } from '@storybook/angular'
import { CardComponent } from './card.component'

const meta: Meta<CardComponent> = {
  title: 'Components/Card',
  component: CardComponent,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<CardComponent>

export const Primary: Story = {}
