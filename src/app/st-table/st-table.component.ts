import { Component, Input, OnInit, Output, ViewChild, ViewChildren } from '@angular/core';

interface IAxTableSetup {
    columns: IAxTableColumns[];
}

interface IAxTableColumns {
    key: string;
    label: string;
    tooltip: string;
}

@Component({
  selector: 'st-table',
  templateUrl: './st-table.component.html',
  styleUrls: ['./st-table.component.scss']
})
export class StTableComponent implements OnInit {

  @Input() setup: IAxTableSetup;
  @Input() data: any[];

  constructor() {

      this.setup = {
          columns: [
              {
                  key: 'name',
                  label: 'Name',
                  tooltip: 'Name'
              },
              {
                  key: 'lastName',
                  label: 'Last Name',
                  tooltip: 'last Name'
              },
              {
                  key: 'birthday',
                  label: 'Birthday',
                  tooltip: 'Birthday'
              },
              {
                  key: 'comment',
                  label: 'Comment',
                  tooltip: 'Comment'
              }
          ]
      };

      //TODO: Retrieve this data using a service
      this.data = [
            {name: 'Sergio', lastName: 'Puyó', birthday: '1/6/84', comment: 'I am the youngest!'},
            {name: 'Alfredo', lastName: 'Soro', birthday: '1/5/55', comment: 'You are not so young!'},
            {name: 'Cesar', lastName: 'Beviá', birthday: '1/4/54', comment: 'You are too old!'}
        ];

  }

  ngOnInit() {
      console.log("st-table init");
  }

}
