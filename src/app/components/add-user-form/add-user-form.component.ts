import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.scss']
})
export class AddUserFormComponent implements OnInit {

  userForm: FormGroup;
  roles= ['Admin', 'Cashier'];


  constructor() { }

  

  ngOnInit() {

    this.userForm = new FormGroup({
        
        'role': new FormControl('Admin',Validators.required),
        'username': new FormControl('',Validators.required),
        'fName':  new FormControl('',Validators.required),
        'lName':   new FormControl('',Validators.required),
        'email': new FormControl('', Validators.required),
        'phone':  new FormControl('', Validators.required),
        'address':  new FormControl('', Validators.required)
  
    });
    
  }


  onSubmit(){

    alert(JSON.stringify(this.userForm.value));
  
  }


}
