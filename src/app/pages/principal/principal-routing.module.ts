import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/service/auth-guard';
import { PrincipalComponent } from './principal.component';

const routes: Routes = [{
    path: '',
    component: PrincipalComponent,
    canActivate: [AuthGuard],
    children: [
       {
          path: '',
          canActivate: [AuthGuard],
          component: PrincipalComponent
       },
    ]
 }];
 
 @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
 })
 export class PrincipalRoutingModule {}