import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, DoCheck } from '@angular/core';
import { Expense } from '../expense'
import { ExpenseService } from '../expenses.service'
import { Observable } from 'rxjs/Observable'
import { checkAndUpdateBinding } from '@angular/core/src/view/util';
@Component({
    selector: 'expense-list',
    templateUrl: 'expense-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ExpenseListComponent implements DoCheck {
    constructor(private changeDetection : ChangeDetectorRef){}
    
    previousListLength = 0;
    ngDoCheck(): void {
        const list = (this.list || []);
        if(this.previousListLength !== list.filter(i => !!i['isHidden']).length){
            this.previousListLength = this.list.length;
            this.changeDetection.markForCheck();
        }
    }

    @Input() list: Expense[];


}