import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

import { Expense } from '../expense';
import { ExpenseService } from '../expenses.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-struct';
@Component({
    selector: 'expense-form',
    templateUrl: 'expense-form.component.html'
})

export class ExpenseFormComponent implements OnInit {

    @Output() newExpense = new EventEmitter<Expense>();
    constructor(private service: ExpenseService) {

    }

    ngOnInit() { }

    frm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        date: new FormControl('', [Validators.required]),
        amount: new FormControl('', [Validators.required]),
    });

    addExpense() {
        if (this.frm.invalid) { return; }
        const expense: Expense = this.frm.value;
        const date : NgbDateStruct = this.frm.get('date').value
        expense.date = new Date(date.year, date.month, date.day);
        this.newExpense.emit(expense);
        this.service.add(expense);
        this.frm.reset();
    }
}
