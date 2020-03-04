import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Role } from 'src/app/_models/role';
import { RoleService } from 'src/app/_services/role.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.scss']
})
export class AddUserFormComponent implements OnInit {

  userForm: FormGroup;
  roles: Role[];
  loading: boolean = true;


  constructor(private roleService: RoleService, private userService: UserService) {

  }

  ngOnInit() {
    this.roleService.getAll().subscribe((res: Role[])=>{
        this.roles = res['hydra:member'];
        this.loading = false;
      })



    this.userForm = new FormGroup({
        userRoles: new FormControl('',Validators.required),
        fname:  new FormControl('',Validators.required),
        lname:   new FormControl('',Validators.required),
        email: new FormControl('', Validators.required),
        phone:  new FormControl('', Validators.required),
        address:  new FormControl('', Validators.required)
    });

  }
  public resetForm() {
    this.userForm = new FormGroup({
        userRoles: new FormControl('', Validators.required ),
    });
}

  onSubmit(){

   this.loading = true;
   this.userService.saveUser(this.userForm.value).subscribe(res => {
      this.loading = false;
      this.resetForm();
   })

  }


}
