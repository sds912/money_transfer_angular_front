import { Component, OnInit } from '@angular/core';
import { Deposits } from 'src/app/_models/deposits';
import { DepositService } from 'src/app/_services/deposit.service';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-deposit-history',
  templateUrl: './deposit-history.component.html',
  styleUrls: ['./deposit-history.component.scss']
})
export class DepositHistoryComponent implements OnInit {
  deposits: Deposits[];
  constructor(private depositService: DepositService, private authService: AuthenticationService) { }

  ngOnInit() {
     this.depositService.findByCreator(this.authService.currentUserValue.user.username).subscribe(res => {
       this.deposits = res['hydra:member'];
       console.log(this.deposits)
     })




  }
}
