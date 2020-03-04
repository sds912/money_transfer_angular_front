import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Partner } from 'src/app/_models/partner';
import { PartnerService } from 'src/app/_services/partner.service';
import { AccountService } from 'src/app/_services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss']
})
export class AddAccountComponent implements OnInit {

  acountForm: FormGroup;
  opened: boolean = true;
  partner: Partner;
  loading: boolean = false;

  constructor(
    private partnerServive: PartnerService,
    private accountService: AccountService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {


    this.acountForm = this.fb.group({
      deposits: this.fb.group({ amount: new FormControl('', [Validators.required, Validators.min(500000)])})
    })

  }

  searchPartner(ninea: string)
  {

    if(ninea.length === 9)
    {
      this.partnerServive.findByNinea(ninea).subscribe(res => {
        this.partner = res['hydra:member'][0];
        this.acountForm.addControl('owner' ,new FormControl(`api/partners/${this.partner.id }`, Validators.required));
      })
    }else{
      this.partner = undefined;
    }
  }

  onSubmit(){
    this.loading = true;
    this.acountForm.value['deposits'] = [this.acountForm.value.deposits] ;
    this.accountService.saveAccount(this.acountForm.value).subscribe(res => {
      this.loading = false;
      this.router.navigate(['dashboard/accounts',res.id])

    })
  }

}
