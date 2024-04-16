import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { CardProps } from './card.interface'

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input() cardProps?: CardProps
}
