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
    })

    @Input() list: any[] = [];
    @Output() searchResult = new EventEmitter();

    ngOnInit() {
        this
            .searchFrm
            .get('searchTxt')
            .valueChanges
            .subscribe(val => this.searchResult.emit(this.list.filter(e => {
                for (let propery in e) {
                    if (e[propery] && e[propery].toString().indexOf(val) > -1) {
                        return true;
                    }
                }
                return false;
            })))

    }


}