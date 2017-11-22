

import { ExpenseFormComponent } from './form/expense-form.component';
import { ExpenseListComponent } from './list/expense-list.component';
import { SearchComponent } from './search/search.component';

import { ExpenseService } from './expenses.service';
import { ExpensesSearchAndListComponent } from './expenses-search-and-list.component';
import { ExpensesRoutingModule } from './expenseroutes.module';
import { ExpensesRootComponent } from './expensesroot.component';
import { CommonImportsModule } from '../commonmodules.module';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [ExpensesRoutingModule, CommonImportsModule],
    exports: [ExpenseFormComponent, ExpenseListComponent, SearchComponent, ExpensesSearchAndListComponent],
    declarations: [ExpenseFormComponent, ExpenseListComponent, SearchComponent, ExpensesSearchAndListComponent, ExpensesRootComponent],
    providers: [ExpenseService],
})
export class ExpensesModule { }
