import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { FooterComponent } from './components/dashboard/footer/footer.component';
import { ListUsuariosComponent } from './components/dashboard/list-usuarios/list-usuarios.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CardUsuarioComponent } from './components/dashboard/list-usuarios/card-usuario/card-usuario.component';
import {HttpClientModule} from "@angular/common/http";
import { LoadingComponent } from './components/dashboard/loading/loading.component';
import { UsuarioComponent } from './components/dashboard/usuario/usuario.component';
import {SpinnerComponent} from "../../../bitly/src/app/components/spinner/spinner.component";

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        NavbarComponent,
        FooterComponent,
        ListUsuariosComponent,
        LayoutComponent,
        CardUsuarioComponent,
        LoadingComponent,
        UsuarioComponent,
        SpinnerComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
