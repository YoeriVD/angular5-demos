import { Component, OnInit, Input } from '@angular/core';
import { Expense } from '../expense'
import { ExpenseService } from '../expenses.service'
import { Observable } from 'rxjs/Observable'
@Component({
    selector: 'expense-list',
    templateUrl: 'expense-list.component.html'
})

export class ExpenseListComponent {

    @Input() list: Expense[];


}