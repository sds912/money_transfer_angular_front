import { PartnerService } from 'src/app/_services/partner.service';
import { Component, OnInit } from '@angular/core';
import { Partner } from 'src/app/_models/partner';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  partner: any;
  accounts: any;
  loading = true;
  constructor(
    private partnerService: PartnerService,
    private authService: AuthenticationService,
    private accountService: AccountService) { }

  ngOnInit() {
    this.authService.currentUser.subscribe(user => {
      this.partnerService.findByNinea(user.user.ninea).subscribe(res => {
        this.partner = res['hydra:member'][0];
        this.accountService.findByOwnerNinea(this.partner.ninea).subscribe(res => {
          this.accounts = res['hydra:member'];
          this.loading = false;
        });
      });
      });

  }

}
