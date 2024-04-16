import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { CardListProps } from './card-list.interface'

@Component({
	selector: 'app-card-list',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './card-list.component.html'
})
export class CardListComponent {
	@Input() cardListProps?: CardListProps
}
