import { tv } from 'tailwind-variants'

export const loadingStyles = tv({
	base: 'w-5 h-5 text-gray-200 animate-spin fill-secondary-600',
	variants: {
		size: {
			default: 'w-5 h-5',
			sm: 'w-4 h-4',
			lg: 'w-6 h-6'
		}
	},
	defaultVariants: {
		size: 'default'
	}
})
