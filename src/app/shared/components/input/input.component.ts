import { Component, Input } from '@angular/core'

import type { InputProps } from './input.interface'

@Component({
	selector: 'app-input',
	standalone: true,
	imports: [],
	templateUrl: './input.component.html'
})
export class InputComponent {
	@Input() props!: InputProps
}
