import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentPage } from './pages/appointment-page/appointment-page.component';
import { HomePage } from './pages/home/home.component';
import { LoginPage } from './pages/login-page/login-page.component';
import { MerchandisingPage } from './pages/merchandising-page/merchandising-page.component';
import { ProductPage } from './pages/product-page/product-page.component';
import { RegisterPage } from './pages/register-page/register-page.component';
import { TattoosPage } from './pages/tattoos-page/tattoos-page.component';

const routes: Routes = [
  {path: 'home', component: HomePage},
  {path: 'login', component: LoginPage},
  {path: 'register', component: RegisterPage},
  {path: 'appointment-page', component: AppointmentPage},
  {path: 'merchandising-page', component: MerchandisingPage},
  {path: 'tattoos-page', component: TattoosPage},
  {path: 'product-page', component: ProductPage},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}


