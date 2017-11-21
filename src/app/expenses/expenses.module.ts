import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '../grid/grid.module';


import { ExpenseFormComponent } from './form/expense-form.component';
import { ExpenseListComponent } from './list/expense-list.component';
import { SearchComponent } from './search/search.component';

import { ExpenseService } from './expenses.service';

@NgModule({
    imports: [ReactiveFormsModule, GridModule, BrowserModule],
    exports: [ExpenseFormComponent, ExpenseListComponent, SearchComponent],
    declarations: [ExpenseFormComponent, ExpenseListComponent, SearchComponent],
    providers: [ExpenseService],
})
export class ExpensesModule { }
