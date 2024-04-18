import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'

import type { CardListProps } from './card-list.interface'
import { cardListStyles } from './card-list.component.styles'

@Component({
	selector: 'app-card-list',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './card-list.component.html'
})
export class CardListComponent {
	@Input() props: CardListProps = {} as CardListProps

	getClassName(item: CardListProps['items'][number]) {
		return cardListStyles({
			className: this.props?.className,
			isSelected: item?.isSelected
		})
	}
}
