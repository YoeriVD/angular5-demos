import { Injectable } from '@angular/core';
import { Expense } from './expense';

import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import 'rxjs/Rx';
@Injectable()
export class ExpenseService {
    url = 'http://localhost:5555/expenses';
    constructor(private httpClient: HttpClient) { }
    get(): Observable<Expense[]> {
        return this.httpClient
            .get(this.url)
            .map((resp: Expense[]) =>
                resp.map(exp => {
                    exp.date = new Date(exp['date']);
                    return exp;
                }));
    }
    add(expense: Expense) {
        const obs = this.httpClient.post(this.url, expense).shareReplay(1);
        obs.subscribe();
        return obs;
    }
}

@Injectable()
export class FakeExpenseService {

    list: Expense[] = [
        { id: 1, name: 'Laptop', date: new Date(2017, 1, 17), amount: 1234.12 },
        { id: 2, name: 'Phone', date: new Date(2016, 11, 12), amount: 489.1 },
        { id: 3, name: 'Lunch', date: new Date(2017, 11, 20), amount: 12.75 },
        { id: 4, name: 'Audi', date: new Date(2018, 2, 17), amount: 49000.99 },
    ];

    constructor() { }

    get(): Expense[] {
        return this.list;
    }

    addExpense(expense: Expense) {
        expense.id = this.list.length + 1;
        this.list.push(expense);
    }
}
