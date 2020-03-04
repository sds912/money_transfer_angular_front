import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DepositService } from 'src/app/_services/deposit.service';

@Component({
  selector: 'app-deposit-form',
  templateUrl: './deposit-form.component.html',
  styleUrls: ['./deposit-form.component.scss']
})
export class DepositFormComponent implements OnInit {
  @Output()
  added: EventEmitter<boolean> = new EventEmitter<boolean>();

 @Input() account: Account;
 depositForm: FormGroup;
 loading: boolean = false;
  constructor(private depositservice: DepositService) { }

  ngOnInit() {
     this.depositForm = new FormGroup({
       amount: new FormControl('', [Validators.required, Validators.minLength(6)])
     })




  }

  onSubmit()
  {
    this.loading = true;
    this.depositForm.value['account']  = `api/partners/accounts/${this.account.id}`;
    this.depositservice.saveDeposit(this.depositForm.value).subscribe(res => {
       this.loading = false;
       this.added.emit(true);
       this.depositForm.reset();

    })
  }

}
