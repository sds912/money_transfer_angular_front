import { PartnerService } from 'src/app/_services/partner.service';
import { Affectation } from './../../../_models/affectation';
import { AccountService } from 'src/app/_services/account.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-manage-employees',
  templateUrl: './manage-employees.component.html',
  styleUrls: ['./manage-employees.component.scss']
})
export class ManageEmployeesComponent implements OnInit {
  partner: any;
  constructor(
    private authService: AuthenticationService,
    private accountService: AccountService,
    private partnerService: PartnerService) { }

  ngOnInit() {

      this.authService.currentUser.subscribe(user => {
        this.partnerService.findByNinea(user.user.ninea).subscribe(res => {
           this.partner = res['hydra:member'][0];
        });
      });
  }

}
