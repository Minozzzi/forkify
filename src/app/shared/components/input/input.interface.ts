export interface InputProps {
	value: string
	type: HTMLInputElement['type']
	placeholder?: string
	onChange: (event: Event) => void
}
