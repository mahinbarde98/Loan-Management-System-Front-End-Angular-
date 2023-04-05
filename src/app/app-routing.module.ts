import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AddLoanComponent } from './add-loan/add-loan.component';
import { BaseAdminComponent } from './base-admin/base-admin.component';
import { AuthGuard } from './_auth/auth.guard';
import { EditLoanComponent } from './edit-loan/edit-loan.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'searchLoan', component: AdminComponent ,canActivate: [AuthGuard], data: { roles: 'Admin'  } || { roles: 'User'  }},
  { path: 'edit', component: EditLoanComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'editLoan', component: EditLoanComponent },
  { path: 'newLoan', component: AddLoanComponent, canActivate: [AuthGuard], data: { roles: 'Admin'  } },
  { path: 'baseadmin', component: BaseAdminComponent, canActivate: [AuthGuard], data: { roles: 'Admin' } },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
