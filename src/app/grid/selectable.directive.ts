import { Directive, AfterContentInit, ElementRef, QueryList, ContentChildren, HostListener, Input } from '@angular/core';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Directive({selector: '[column]'})
export class ColumnDirective {
    @Input() column: string;
    private subject = new Subject<string>();
    get clicked() {
        return this.subject.asObservable();
    }
    @HostListener('click')
    onClick() {
        this.subject.next(this.column);
    }
}

@Directive({
    selector: '[selectable]',
    exportAs: 'sort'
})
export class SelectableColumnDirective implements AfterContentInit {
    column = 'id';
    @ContentChildren(ColumnDirective) headers: QueryList<ColumnDirective>;

    ngAfterContentInit(): void {
        Observable
        .from(this.headers.toArray())
        .merge(this.headers.changes)
        .mergeMap((h: ColumnDirective) => h.clicked)
        .subscribe(column => this.column = column);
    }
}
