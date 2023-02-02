import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/service/auth-guard';
import { LoginComponent } from './pages/login/login.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { TransferenciaComponent } from './pages/transferencia/transferencia.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },  
  {
    path: 'principal', 
    canActivate: [AuthGuard],
    component: PrincipalComponent
  },
  {
    path: 'transferencia', 
    canActivate: [AuthGuard],
    component: TransferenciaComponent
  },
  {
    path: '**', component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
