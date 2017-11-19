import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeNlBe from '@angular/common/locales/nl-BE';
import localeNlBeExtra from '@angular/common/locales/extra/nl-BE';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';

import { ExpenseListComponent } from './list/expense-list.component';
import { ExpenseFormComponent } from './form/expense-form.component';
import { SearchComponent } from './search/search.component';

registerLocaleData(localeNlBe, localeNlBeExtra);

@NgModule({
  declarations: [
    AppComponent, ExpenseListComponent, ExpenseFormComponent, SearchComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, NgbModule.forRoot()
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'nl-BE' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
