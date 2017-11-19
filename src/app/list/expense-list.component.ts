import { Component, OnInit, Input } from '@angular/core';
import { Expense } from '../expense'

@Component({
    selector: 'expense-list',
    templateUrl: 'expense-list.component.html'
})

export class ExpenseListComponent implements OnInit {

    @Input() list : Expense[] = []; 

    constructor() { }

    ngOnInit() { }
}