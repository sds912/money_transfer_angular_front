import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/_services/account.service';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-account-history',
  templateUrl: './account-history.component.html',
  styleUrls: ['./account-history.component.scss']
})
export class AccountHistoryComponent implements OnInit {
  accounts: Account[];
  loading: boolean = true;
  constructor(private accountService: AccountService, private authService: AuthenticationService) { }

  ngOnInit() {
     this.accountService.findByCreator(this.authService.currentUserValue.user.username).subscribe(res => {
       this.accounts = res['hydra:member'];
        this.loading = false;
     })
  }

}
