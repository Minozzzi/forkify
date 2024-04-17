import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { CommonModule } from '@angular/common'

import { HeaderComponent } from '../../shared/components/header/header.component'

@Component({
	selector: 'app-content',
	standalone: true,
	imports: [RouterOutlet, CommonModule, HeaderComponent],
	templateUrl: './content.component.html'
})
export class ContentComponent {}
