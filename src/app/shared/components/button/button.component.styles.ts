import { tv } from 'tailwind-variants'

export const buttonStyles = tv({
	base: 'inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 duration-500 ease-in-out transform hover:scale-110',
	variants: {
		variant: {
			default: 'bg-primary-500 text-white hover:bg-primary-600',
			destructive: 'bg-destructive text-white hover:bg-red-600',
			other: 'bg-',
			outline:
				'border border-input bg-white hover:bg-accent hover:text-accent-foreground',
			secondary: 'bg-secondary-500 text-white hover:bg-secondary-600',
			ghost: 'hover:bg-accent hover:text-accent-foreground',
			link: 'text-primary underline-offset-4 hover:underline'
		},
		size: {
			default: 'h-10 px-4 py-2',
			sm: 'h-9 rounded-md px-3',
			lg: 'h-11 rounded-md px-8',
			icon: 'h-10 w-10'
		}
	},
	defaultVariants: {
		variant: 'default',
		size: 'default'
	}
})
