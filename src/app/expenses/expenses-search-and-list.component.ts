import { Component, OnInit } from '@angular/core';
import { Expense } from './expense';
import { ExpenseService } from './expenses.service';


@Component({
  selector: 'expenses',
  templateUrl: 'expenses-search-and-list.component.html'
})
export class ExpensesSearchAndListComponent implements OnInit {
  list: Expense[];
  constructor(private service: ExpenseService) { }

  ngOnInit() {
    this.service.get().subscribe(data => this.list = data);
  }

  add(expense: Expense) {
    this.list.push(expense);
    this.service.add(expense).subscribe((e: Expense) => {
      this.list[this.list.length - 1] = e;
    });

  }
}
