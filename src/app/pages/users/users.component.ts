import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  selectedIndex: number ;
  users: User[];
  constructor(private userService: UserService) { }

  ngOnInit() {

        this.userService.getAll().subscribe((res: User[]) => {
          this.users = res['hydra:member'];

          console.log(this.users)
        })


     }

}
