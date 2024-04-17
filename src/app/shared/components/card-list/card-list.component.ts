import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'

import type { CardListProps } from './card-list.interface'

@Component({
	selector: 'app-card-list',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './card-list.component.html'
})
export class CardListComponent {
	@Input() props: CardListProps = {} as CardListProps
}
