import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '../grid';
import { HttpClientModule } from '@angular/common/http';

import { ExpenseFormComponent } from './form/expense-form.component';
import { ExpenseListComponent } from './list/expense-list.component';
import { SearchComponent } from './search/search.component';

import { ExpenseService } from './expenses.service';
import { ExpensesSearchAndListComponent } from './expenses-search-and-list.component';
import { ExpensesRoutingModule } from './expenseroutes.module';
import { ExpensesRootComponent } from './expensesroot.component';

@NgModule({
    imports: [ReactiveFormsModule, GridModule, BrowserModule, HttpClientModule, ExpensesRoutingModule],
    exports: [ExpenseFormComponent, ExpenseListComponent, SearchComponent, ExpensesSearchAndListComponent],
    declarations: [ExpenseFormComponent, ExpenseListComponent, SearchComponent, ExpensesSearchAndListComponent, ExpensesRootComponent],
    providers: [ExpenseService],
})
export class ExpensesModule { }
