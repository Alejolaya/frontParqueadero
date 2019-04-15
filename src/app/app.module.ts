import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'

import { RegistrarIngresoComponent } from './registrar-ingreso/registrar-ingreso.component';
import { RegistrarSalidaComponent } from './registrar-salida/registrar-salida.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarIngresoComponent,
    RegistrarSalidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
