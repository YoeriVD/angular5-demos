import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
    selector: 'search',
    templateUrl: 'search.component.html'
})

export class SearchComponent implements OnInit {
    constructor() { }
    searchFrm = new FormGroup({
        searchTxt: new FormControl()
    });

    @Input()list: any[] = [];

    ngOnInit() {
        this
            .searchFrm
            .get('searchTxt')
            .valueChanges
            .subscribe(val => this.list.forEach(e => {
                e.isHidden = true;
                for (const propery in e) {
                    if (e[propery] && e[propery].toString().toLowerCase().indexOf(val.toLowerCase()) > -1) {
                        e.isHidden = false;
                    }
                }
            }));

    }


}
