import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'

import { ButtonProps } from './button.interface'
import { buttonStyles } from './button.component.styles'

@Component({
	selector: 'app-button',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './button.component.html'
})
export class ButtonComponent {
	@Input()
	buttonProps?: ButtonProps

	@Output()
	handleOnClick = new EventEmitter<Event>()

	get className() {
		return buttonStyles({
			className: this.buttonProps?.class,
			size: this.buttonProps?.size,
			variant: this.buttonProps?.variant
		})
	}

	onClick() {
		this.handleOnClick.emit()
	}
}
