import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { PartnerService } from 'src/app/_services/partner.service';

@Component({
  selector: 'app-partner-form',
  templateUrl: './partner-form.component.html',
  styleUrls: ['./partner-form.component.scss']
})
export class PartnerFormComponent implements OnInit {
  partnerForm: FormGroup;
  constructor(private fb: FormBuilder, private partnerService: PartnerService) { }

  ngOnInit() {

    this.partnerForm = this.fb.group({
      accounts: this.fb.group({
        amount: new FormControl('', [Validators.required, Validators.min(500000)])
      }),
      user: this.fb.group({
      fname:     new FormControl('',Validators.required),
      lname:     new FormControl('',Validators.required),
      email:     new FormControl('', Validators.required),
      phone:     new FormControl('', Validators.required)
    }),
      ninea: new FormControl('', Validators.required),
      rc: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required)
    })

  }


  onSubmit()
  {
    this.partnerForm.value['accounts'] = [{deposits:[this.partnerForm.value.accounts]}]
    this.partnerService.savePartner(this.partnerForm.value).subscribe(res => {
    alert(JSON.stringify(res));

    })

  }

}
