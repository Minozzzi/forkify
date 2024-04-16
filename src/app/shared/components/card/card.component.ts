import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { LucideAngularModule } from 'lucide-angular'
import { CardProps } from './card.interface'

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input() cardProps!: CardProps
}
