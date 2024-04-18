import { tv } from 'tailwind-variants'

export const cardListStyles = tv({
	base: 'flex flex-row items-center gap-4 px-6 py-8 cursor-pointer duration-300 ease-in-out transform hover:bg-primary-100 hover:scale-y-110',
	variants: {
		isSelected: {
			true: 'bg-primary-100',
			false: ''
		}
	},
	defaultVariants: {
		isSelected: false
	}
})
