import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'

import { buttonStyles } from './button.component.styles'

import type { ButtonProps } from './button.interface'

@Component({
	selector: 'app-button',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './button.component.html'
})
export class ButtonComponent {
	@Input() props: ButtonProps = {} as ButtonProps

	get className() {
		return buttonStyles({
			className: this.props?.className,
			size: this.props?.size,
			variant: this.props?.variant
		})
	}
}
