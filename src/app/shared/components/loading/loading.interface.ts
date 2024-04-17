import type { VariantProps } from 'tailwind-variants'

import { loadingStyles } from './loading.component.styles'

export interface LoadingProps extends VariantProps<typeof loadingStyles> {
	className?: string
}
