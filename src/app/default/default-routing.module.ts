import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default.component';
import { HomeComponent } from '../pages/home/home.component';
import { AddAccountComponent } from '../pages/add-account/add-account.component';
import { DepositComponent } from '../pages/deposit/deposit.component';
import { CommissionsComponent } from '../pages/commissions/commissions.component';
import { UsersComponent } from '../pages/users/users.component';
import { PartnersComponent } from '../pages/partners/partners.component';
import { PartnerDetailsComponent } from '../components/partner-details/partner-details.component';
import { AccountDetailsComponent } from '../components/account-details/account-details.component';
import { SinglePartnerDetailsComponent } from '../pages/single-partner-details/single-partner-details.component';


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
      },
      {
        path: 'partners/:id',
        component: SinglePartnerDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
