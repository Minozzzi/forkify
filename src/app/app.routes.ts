import { Routes } from '@angular/router'
import { ContentComponent } from './layout/content/content.component'
import { HomeComponent } from './modules/home/home.component'

export const routes: Routes = [
	{
		path: '',
		component: ContentComponent,
		children: [
			{
				path: '',
				component: HomeComponent
			}
		]
	}
]
