import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, DoCheck } from '@angular/core';
import { Expense } from './expenses/expense';
import { ExpenseService } from './expenses/expenses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
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
