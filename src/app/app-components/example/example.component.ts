import { Component, OnInit } from '@angular/core';
import {Moment} from "moment";

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.less']
})
export class ExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selected: {startDate: Moment, endDate: Moment};
}
