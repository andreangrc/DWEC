import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RegisterComponent } from './components/register/register.component';
import { ButtonComponent } from './components/button/button.component';
import { ButtonLoginComponent } from './components/button-login/buttonLogin.component';
import { HomePage } from './pages/home/home.component';
import { LoginPage } from './pages/login-page/login-page.component';
import { RegisterPage } from './pages/register-page/register-page.component';
import { AppointmentPage } from './pages/appointment-page/appointment-page.component';
import { MerchandisingPage } from './pages/merchandising-page/merchandising-page.component';
import { ProductPage } from './pages/product-page/product-page.component';
import { TattoosPage } from './pages/tattoos-page/tattoos-page.component';
import { DesplegableComponent } from './components/desplegable/desplegable.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './services/pokemon-service';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ButtonLoginComponent,
    LoginComponent,
    FooterComponent,
    NavBarComponent,
    RegisterComponent,
    AppointmentPage,
    HomePage,
    LoginPage,
    MerchandisingPage,
    ProductPage,
    RegisterPage,
    TattoosPage,
    DesplegableComponent,
    PokemonListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
