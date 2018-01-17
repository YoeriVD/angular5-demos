import { Directive, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Directive({ selector: 'table[sortable]', exportAs: 'column' })
export class SortableColumnDirective implements OnInit {

    constructor(private el: ElementRef) { }
    selectedColumn = 'id';
    reverse = false;
 
    ngOnInit(): void {
        const el: HTMLTableElement = this.el.nativeElement;
        const elements = el.getElementsByTagName('th');
        Array.prototype.forEach.call(elements, (element) => {
            const th: HTMLTableHeaderCellElement = element;
            th.addEventListener('click', () => this.selectedColumn = th.innerText.toLowerCase());
        });


        // const el: HTMLTableElement = this.el.nativeElement;
        // const elements = el.getElementsByTagName('th');
        // Array.prototype.forEach.call(elements, (element) => {
        //     const th: HTMLTableHeaderCellElement = element;
        //     th.addEventListener('click', () => this.selectedColumn = th.innerText.toLowerCase())
        // });
    }
}
