import { Component, OnInit,  ViewChild } from '@angular/core';
import { User } from 'src/app/_models/user';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  USER_DATA: User[];
  displayedColumns: string[] = ['username', 'email', 'phone', 'address'];
  dataSource: any; 
  loading: boolean = false;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  users: User[];
  constructor(private usersService: UserService) { 

      
  }

  ngOnInit() {
     this.loading = true;
    this.usersService.getAll().subscribe((res)=>{
     this.dataSource = new MatTableDataSource<User>(res['hydra:member']);  
     this.dataSource.paginator = this.paginator;
     this.loading = false;
    })


  
  }

  

}


