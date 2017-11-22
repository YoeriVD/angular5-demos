import { Component, OnInit } from '@angular/core';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-config';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    
  }
  constructor(private config : NgbDatepickerConfig) { }

}
