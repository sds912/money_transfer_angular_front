import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.scss']
})
export class EmployeeItemComponent implements OnInit {
  @Input() employee;
  constructor() { }

  ngOnInit() {
  }

}
