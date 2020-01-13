import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';
import { HeaderComponent } from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { MenuComponent } from '../components/menu/menu.component';
import { HomeComponent } from '../home/home.component';
import { AddAccountComponent } from '../pages/add-account/add-account.component';
import { AddUserFormComponent } from '../components/add-user-form/add-user-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DefaultComponent,
    HeaderComponent,
    SidebarComponent,
    ProfileComponent,
    MenuComponent,
    HomeComponent,
    AddAccountComponent,
    AddUserFormComponent
  ],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    ReactiveFormsModule
  ]
})
export class DefaultModule { }
