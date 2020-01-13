import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menus = [
    {
      name: 'New Account',
      path: ''
    },
    {
      name: 'Deposit',
      path: ''
    },
    {
      name: 'Commisions',
      path: ''
    },
    {
      name: 'Manage Users',
      path: ''
    },
    {
      name: 'Manage Partners',
      path: ''
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
