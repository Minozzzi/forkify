import { Component, Input } from '@angular/core'

import { loadingStyles } from './loading.component.styles'

import type { LoadingProps } from './loading.interface'
import { CommonModule } from '@angular/common'

@Component({
	selector: 'app-loading',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './loading.component.html'
})
export class LoadingComponent {
	@Input() props: LoadingProps = {} as LoadingProps

	get className() {
		return loadingStyles({
			className: this.props?.className,
			size: this.props?.size
		})
	}
}
