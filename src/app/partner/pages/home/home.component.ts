import { PartnerService } from 'src/app/_services/partner.service';
import { Component, OnInit } from '@angular/core';
import { Partner } from 'src/app/_models/partner';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  partner: Partner;
  totalBalance = 0;
  constructor(private partnerService: PartnerService, private authService: AuthenticationService ) { }

  ngOnInit() {
    this.authService.currentUser.subscribe(res => {
       this.partnerService.findByNinea(res.user.ninea).subscribe(partner => {
         this.partner = partner['hydra:member'][0];
         this.calculateTotalBalance(this.partner.accounts);
       });
    });
  }

  calculateTotalBalance(accounts: any) {
    let total: number;
    accounts.forEach(item => {
       total =  +item.balance;
     });
    this.totalBalance = total;

  }

}
