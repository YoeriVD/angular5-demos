import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ExpenseService } from '../expenses.service'; 
@Component({
    selector: 'search',
    templateUrl: 'search.component.html'
})

export class SearchComponent implements OnInit {
    constructor(private service : ExpenseService) { }
    searchFrm = new FormGroup({
        searchTxt: new FormControl()
    })

    list: any[] = [];

    ngOnInit() {
        this.list = this.service.get();
        this
            .searchFrm
            .get('searchTxt')
            .valueChanges
            .subscribe(val => this.list.forEach(e => {
                e.isHidden = true;
                for (let propery in e) {
                    if (e[propery] && e[propery].toString().toLowerCase().indexOf(val.toLowerCase()) > -1) {
                        e.isHidden = false;
                    }
                }
            }))

    }


}