import { HttpClient } from '@angular/common/http';
import { AffectationService } from './../../../_services/affectation.service';
import { PartnerService } from './../../../_services/partner.service';
import { RoleService } from './../../../_services/role.service';
import { Role } from 'src/app/_models/role';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Partner } from 'src/app/_models/partner';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  employeeForm: FormGroup;
  roles: Role;
  loading = true;
  partner: Partner;
  account: any;
  constructor(
    private roleService: RoleService,
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private partnerService: PartnerService,
    private affectService: AffectationService,
    private http: HttpClient
     ) { }

  ngOnInit() {
    this.authService.currentUser.subscribe(user => {
      this.partnerService.findByNinea(user.user.ninea).subscribe(res => {
        this.partner = res['hydra:member'][0];
       // console.log(this.partner);
        this.loading = false;
      });
      });
    this.roleService.getAll().subscribe(res => {
      this.roles = res['hydra:member'];
      this.loading = false;
    });

    this.employeeForm = this.fb.group({
      account: new FormControl('', [Validators.required]),
      startAt: new FormControl('', [Validators.required]),
      endAt:  new FormControl('', [Validators.required]),
      employee: this.fb.group({
        userRoles: new FormControl('', [Validators.required]),
        fname:  new FormControl('', [Validators.required]),
        lname:   new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        phone:  new FormControl('', [Validators.required]),
        address:  new FormControl('', [Validators.required]),
      })
  });

}

onSubmit() {
  this.loading = true;
  this.affectService.save(this.employeeForm.value).subscribe(res => {
    this.loading = false;
    this.employeeForm.reset({
      account: new FormControl('', [Validators.required]),
      employee: this.fb.group({
        userRoles: new FormControl('', [Validators.required])
      })});
  });
}

onChange(value: string) {
  this.http.get(`${environment.apiUrl}/${value.substr(4)}`).subscribe(res => {
    this.account = res;
  });
}

}
