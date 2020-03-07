import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { ManageEmployeesComponent } from './pages/manage-employees/manage-employees.component';
import { PartnerComponent } from './partner/partner.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: PartnerComponent,
    children: [
      {
        path: 'employee',
        component: ManageEmployeesComponent
      },
      {
        path: 'add-employee',
        component: AddEmployeeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnerRoutingModule { }
