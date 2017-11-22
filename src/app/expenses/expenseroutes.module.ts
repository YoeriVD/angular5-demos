import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpenseFormComponent } from './form/expense-form.component';
import { ExpensesRootComponent } from './expensesroot.component';
import { ExpensesSearchAndListComponent } from './expenses-search-and-list.component';


const routes: Routes = [
    {
        path: 'expenses', component: ExpensesRootComponent,
        children: [
            { path: 'list', component: ExpensesSearchAndListComponent },
            { path: 'form', component: ExpenseFormComponent },
            { path: '**', redirectTo: 'list' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ExpensesRoutingModule { }
