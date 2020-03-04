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
import { UserListComponent } from '../components/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { PartnerFormComponent } from '../components/partner-form/partner-form.component';
import { PartnerDetailsComponent } from '../components/partner-details/partner-details.component';
import { AccountDetailsComponent } from '../components/account-details/account-details.component';
import { DepositFormComponent } from '../components/deposit-form/deposit-form.component';
import { PartnerListComponent } from '../components/partner-list/partner-list.component';
import { SinglePartnerDetailsComponent } from '../pages/single-partner-details/single-partner-details.component';
import { DepositHistoryComponent } from '../components/deposit-history/deposit-history.component';
import { AccountHistoryComponent } from '../components/account-history/account-history.component';



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
    UserListComponent,
    PartnerFormComponent,
    PartnerDetailsComponent,
    AccountDetailsComponent,
    DepositFormComponent,
    PartnerListComponent,
    AccountDetailsComponent,
    SinglePartnerDetailsComponent,
    DepositHistoryComponent,
    AccountHistoryComponent
  ],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class DefaultModule { }
