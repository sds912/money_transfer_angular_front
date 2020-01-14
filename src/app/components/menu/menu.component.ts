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
      path: '/new-account'
    },
    {
      name: 'Deposit',
      path: '/deposit'
    },
    {
      name: 'Commissions',
      path: '/commissions'
    },
    {
      name: 'Manage Users',
      path: '/users'
    },
    {
      name: 'Manage Partners',
      path: '/partners'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
