import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';
import { HeaderComponent } from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { MenuComponent } from '../components/menu/menu.component';
import { HomeComponent } from '../pages/home/home.component';
import { AddAccountComponent } from '../pages/add-account/add-account.component';
import { AddUserFormComponent } from '../components/add-user-form/add-user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DepositComponent } from '../pages/deposit/deposit.component';
import { CommissionsComponent } from '../pages/commissions/commissions.component';
import { UsersComponent } from '../pages/users/users.component';
import { PartnersComponent } from '../pages/partners/partners.component';
import { UserListItemComponent } from '../components/user-list-item/user-list-item.component';
import { UserListComponent } from '../components/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';




@NgModule({
  declarations: [
    DefaultComponent,
    HeaderComponent,
    SidebarComponent,
    ProfileComponent,
    MenuComponent,
    HomeComponent,
    AddAccountComponent,
    AddUserFormComponent,
    DepositComponent,
    CommissionsComponent,
    UsersComponent,
    PartnersComponent,
    UserListItemComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class DefaultModule { }
