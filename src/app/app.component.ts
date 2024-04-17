import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { ContentComponent } from './layout/content/content.component'

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, ContentComponent],
	templateUrl: './app.component.html'
})
export class AppComponent {}
