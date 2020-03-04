import { Component, OnInit,  ViewChild, Input } from '@angular/core';
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
  displayedColumns: string[] = ['lname','fname','email', 'phone','role','status','actions'];
  @Input() dataSource: User[];
  loading: boolean = true;

  //@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor() {


  }

  ngOnInit() {



  }



}


