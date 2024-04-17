import type { VariantProps } from 'tailwind-variants'
import { buttonStyles } from './button.component.styles'

export interface ButtonProps extends VariantProps<typeof buttonStyles> {
	type?: 'button' | 'submit'
	disabled?: boolean
	className?: string
}
