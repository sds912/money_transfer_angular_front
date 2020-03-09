import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
 @Input() employees;

 /*= [
    {
      id: 1,
      fName: 'pape',
      lName: 'Senghor',
      email: 'senghor123@gmail.com',
      account: 14585755,
      phone: '7845512545',
      activated: true,
      addedAt: '12/02/2020',
      link: 'employer/1'
    }];
    */
  constructor() { }

  ngOnInit() {
  }

}
