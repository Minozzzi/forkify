import { CommonModule } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'
import { LucideAngularModule } from 'lucide-angular'

import type { CardProps } from './card.interface'

@Component({
	selector: 'app-card',
	standalone: true,
	imports: [CommonModule, LucideAngularModule],
	templateUrl: './card.component.html',
	styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
	@Input() props: CardProps = {} as CardProps

	public truthyServings = 0

	ngOnInit(): void {
		this.truthyServings = this.props.servings
	}

	getIngredientQuantity(quantity: number | null) {
		if (!quantity) return ''

		const originalServings = quantity / this.truthyServings
		return originalServings * this.props.servings
	}

	onUpdateServings(action: 'plus' | 'minus') {
		if (action === 'minus' && this.props.servings < 2) return

		this.props = {
			...this.props,
			servings:
				action === 'plus' ? this.props.servings + 1 : this.props.servings - 1
		}
	}
}
