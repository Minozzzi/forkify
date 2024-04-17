import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'

import { ButtonComponent } from '../button/button.component'

import type { PaginationProps } from './pagination.interface'
import { LucideAngularModule } from 'lucide-angular'

@Component({
	selector: 'app-pagination',
	standalone: true,
	imports: [CommonModule, ButtonComponent, LucideAngularModule],
	templateUrl: './pagination.component.html'
})
export class PaginationComponent {
	@Input() props: PaginationProps = {} as PaginationProps
}
