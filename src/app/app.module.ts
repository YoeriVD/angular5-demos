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
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';


registerLocaleData(localeNlBe, localeNlBeExtra);

import { NgbDateMomentParserFormatter } from './date.formatter';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgbModule.forRoot(), SdUiModule.forRoot(), ExpensesModule, AppRoutesModule, AboutModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'nl-BE' },
    { provide: NgbDateParserFormatter, useValue: new NgbDateMomentParserFormatter("DD-MM-YYYY") }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
