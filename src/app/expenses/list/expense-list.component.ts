import { Component, OnInit, Input } from '@angular/core';
import { Expense } from '../expense'
import { ExpenseService } from '../expenses.service'
@Component({
    selector: 'expense-list',
    templateUrl: 'expense-list.component.html'
})

export class ExpenseListComponent implements OnInit {

    @Input() list: Expense[] = [];

    constructor(private service: ExpenseService) { }

    ngOnInit() {
        this.list = this.service.get();
    }
}