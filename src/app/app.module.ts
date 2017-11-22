import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeNlBe from '@angular/common/locales/nl-BE';
import localeNlBeExtra from '@angular/common/locales/extra/nl-BE';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SdUiModule } from '@sdworx/sd-components';

import { AppComponent } from './app.component';

import { ExpensesModule } from './expenses';
import { AppRoutesModule } from './app.routes';
import { AboutModule } from './about';


registerLocaleData(localeNlBe, localeNlBeExtra);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgbModule.forRoot(), SdUiModule.forRoot(), ExpensesModule, AppRoutesModule, AboutModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'nl-BE' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
