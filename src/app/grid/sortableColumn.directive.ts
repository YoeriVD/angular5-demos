import { Directive, ElementRef, OnInit, AfterContentInit,QueryList,ContentChildren } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Directive({ selector: 'table[sortable]', exportAs: 'column' })
export class SortableColumnDirective implements AfterContentInit {

    constructor(private el: ElementRef) { }
    selectedColumn = 'id';

    @ContentChildren('th', {descendants : true}) headers : QueryList<ElementRef>;

    ngAfterContentInit(): void {
        Observable
        .from(this.headers.toArray())
        .mergeMap(h => Observable.fromEvent(h.nativeElement, 'click'))
        .map((ce : Event) => <HTMLTableHeaderCellElement>ce.target)
        .map(th => th.innerText.toLowerCase())
        .forEach(val => this.selectedColumn = val);


        // const el: HTMLTableElement = this.el.nativeElement;
        // const elements = el.getElementsByTagName('th');
        // Array.prototype.forEach.call(elements, (element) => {
        //     const th: HTMLTableHeaderCellElement = element;
        //     th.addEventListener('click', () => this.selectedColumn = th.innerText.toLowerCase())
        // });
    }
}