import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-sm-item',
  templateUrl: './employee-sm-item.component.html',
  styleUrls: ['./employee-sm-item.component.scss']
})
export class EmployeeSmItemComponent implements OnInit {
  @Input() employee;

  constructor() { }

  ngOnInit() {
  }

}
