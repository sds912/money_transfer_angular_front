import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {
  @Input() accounts: Account[];
  constructor() { }

  ngOnInit() {
  }

}
