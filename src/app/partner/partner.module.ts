import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnerRoutingModule } from './partner-routing.module';
import { PartnerComponent } from './partner/partner.component';
import { EmployeeItemComponent } from './components/employee-item/employee-item.component';
import { ManageEmployeesComponent } from './pages/manage-employees/manage-employees.component';
import { ManageAccountsComponent } from './pages/manage-accounts/manage-accounts.component';
import { AccountItemComponent } from './components/account-item/account-item.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SideMenuComponent } from './layouts/side-menu/side-menu.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { MaterialModule } from '../material/material.module';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { EmployeeSmItemComponent } from './components/employee-sm-item/employee-sm-item.component';
import { HomeInfoPanelComponent } from './components/home-info-panel/home-info-panel.component';
import { AccountListComponent } from './components/account-list/account-list.component';


@NgModule({
  declarations: [
    PartnerComponent,
    EmployeeItemComponent,
    ManageEmployeesComponent,
    ManageAccountsComponent,
    AccountItemComponent,
    HomeComponent,
    HeaderComponent,
    SideMenuComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    EmployeeFormComponent,
    AccountDetailsComponent,
    EmployeeSmItemComponent,
    HomeInfoPanelComponent,
    AccountListComponent
  ],
  imports: [
    CommonModule,
    PartnerRoutingModule,
    MaterialModule,
    ReactiveFormsModule

  ]
})
export class PartnerModule { }
