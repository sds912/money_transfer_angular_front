import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent implements OnInit {
  account: any;
  foundedAccount: number;
  constructor(private accountservice: AccountService) { }

  ngOnInit() {


  }


  searchAccount(accountNumber: number)
  {
    this.accountservice.findByAccountNumber(accountNumber).subscribe(res => {
      this.account = res['hydra:member'][0];
    })

  }

  isAdded(event: boolean){
    if(event)
    {
      this.accountservice.findByAccountNumber(this.account.accountNumber).subscribe(res =>{
        this.account = res['hydra:member'][0];
      })

    }
   }





}
