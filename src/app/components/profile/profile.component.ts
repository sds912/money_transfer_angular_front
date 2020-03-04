import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Router } from '@angular/router';
import { CurrentUser } from 'src/app/_models/currentUser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentUser: CurrentUser;
  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser')).user;
  }


  logout(){
   this.auth.logout();
   this.router.navigate(['login']);
  }


}
