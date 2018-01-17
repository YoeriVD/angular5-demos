import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture, inject } from '@angular/core/testing';
import { ExpenseListComponent } from './expense-list.component';
import { Expense } from '../expense';
import { SortableColumnDirective } from '../../grid/sortableColumn.directive'
import { OrderByPipe } from '../../grid/orderBy.pipe'
import { ExpenseService } from '../expenses.service'

describe("ExpenseListComponent", () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ExpenseListComponent, SortableColumnDirective, OrderByPipe],
            schemas: [NO_ERRORS_SCHEMA]
        });
        TestBed.compileComponents();
    })


    it("should render 2 rows", () => {

        const fakelist = [
            { id: 1, name: '', amount: 55, date: new Date() },
            { id: 1, name: '', amount: 55, date: new Date() }
        ]

        const fixture: ComponentFixture<ExpenseListComponent> = TestBed.createComponent(ExpenseListComponent);
        const component: ExpenseListComponent = fixture.componentInstance;

        component.list = fakelist;
        fixture.detectChanges();

        expect(fixture.nativeElement.querySelectorAll('tbody tr').length).toBe(2);
    })
});