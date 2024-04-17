import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'

import type { HeaderProps } from './header.interface'

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './header.component.html'
})
export class HeaderComponent {
	@Input() props: HeaderProps = {
		logo: '/assets/forkify-logo.png'
	}
}
