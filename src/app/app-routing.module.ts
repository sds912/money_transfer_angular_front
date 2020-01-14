import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AuthGuard } from './_helpers/auth.guard';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  { 
    path: 'dashboard', 
    canActivate: [AuthGuard],
    loadChildren: () => import('./default/default.module').then(m => m.DefaultModule)
  },
  {
     path: 'login',
     component: LoginComponent
  },
  { 
    path: '**', 
    component: PageNotFoundComponent 
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
