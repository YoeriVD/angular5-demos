import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

import { Expense } from './expense'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  list: Expense[] = [
    { id: 1, name: "Laptop", date: new Date(2017, 1, 17), amount: 1234.12 },
    { id: 2, name: "Phone", date: new Date(2016, 11, 12), amount: 489.1 },
    { id: 3, name: "Lunch", date: new Date(2017, 11, 20), amount: 12.75 },
    { id: 4, name: "Audi", date: new Date(2018, 2, 17), amount: 49000.99 },
  ]
  _viewList: Expense[];
  get viewList() {
    return this._viewList || this.list;
  }

  addExpense(expense: Expense) {
    expense.id = this.list.length + 1;
    this.list.push(expense);
  }
  updateList = (result: Expense[]) => this._viewList = result;


  ngOnInit(): void {
  }
}
