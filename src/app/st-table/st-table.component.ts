import { Component, Input, OnInit, Output, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'st-table',
  templateUrl: './st-table.component.html',
  styleUrls: ['./st-table.component.scss']
})
export class StTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      console.log("st-table init");
  }

}
