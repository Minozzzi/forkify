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
	BookmarkMinus,
	Search,
	Pizza,
	ChevronLeft,
	ChevronRight
} from 'lucide-angular'

import { routes } from './app.routes'
import { provideHttpClient } from '@angular/common/http'

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		provideHttpClient(),
		importProvidersFrom(
			LucideAngularModule.pick({
				Clock,
				UsersRound,
				CirclePlus,
				CircleMinus,
				Check,
				BookmarkPlus,
				BookmarkMinus,
				Search,
				Pizza,
				ChevronLeft,
				ChevronRight
			})
		)
	]
}
