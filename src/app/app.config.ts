import { ApplicationConfig, importProvidersFrom } from '@angular/core'
import { provideRouter } from '@angular/router'
import {
	LucideAngularModule,
	Clock,
	UsersRound,
	CirclePlus,
	CircleMinus,
	Check,
	BookmarkPlus,
	BookmarkMinus
} from 'lucide-angular'

import { routes } from './app.routes'

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		importProvidersFrom(
			LucideAngularModule.pick({
				Clock,
				UsersRound,
				CirclePlus,
				CircleMinus,
				Check,
				BookmarkPlus,
				BookmarkMinus
			})
		)
	]
}
