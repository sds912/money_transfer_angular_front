import { PartnerService } from 'src/app/_services/partner.service';
import { Component, OnInit } from '@angular/core';
import { Partner } from 'src/app/_models/partner';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  partner: any;
  loading = true;
  constructor(private partnerService: PartnerService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.authService.currentUser.subscribe(user => {
      this.partnerService.findByNinea(user.user.ninea).subscribe(res => {
        this.partner = res['hydra:member'][0];
       // console.log(this.partner);
        this.loading = false;
      });
      });

  }

}
