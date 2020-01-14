import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default.component';
import { HomeComponent } from '../pages/home/home.component';
import { AddAccountComponent } from '../pages/add-account/add-account.component';
import { DepositComponent } from '../pages/deposit/deposit.component';
import { CommissionsComponent } from '../pages/commissions/commissions.component';
import { UsersComponent } from '../pages/users/users.component';
import { PartnersComponent } from '../pages/partners/partners.component';


const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      

      },
      {
        path: 'new-account',
        component: AddAccountComponent
      },
      {
        path: 'deposit',
        component: DepositComponent
      },
      {
        path: 'commissions',
        component: CommissionsComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'partners',
        component: PartnersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
