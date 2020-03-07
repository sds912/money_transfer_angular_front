import { RoleService } from './../../../_services/role.service';
import { Role } from 'src/app/_models/role';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  employeeForm: FormGroup;
  roles: Role;
  loading = true;
  constructor(private roleService: RoleService ) { }

  ngOnInit() {
    this.roleService.getAll().subscribe(res => {
      this.roles = res['hydra:member'];
      this.loading = false;
    });

    this.employeeForm = new FormGroup({
      userRoles: new FormControl('', [Validators.required]),
      fname:  new FormControl('', [Validators.required]),
      lname:   new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone:  new FormControl('', [Validators.required]),
      address:  new FormControl('', [Validators.required])
  });
  }

}



