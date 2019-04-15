import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarIngresoComponent } from './registrar-ingreso/registrar-ingreso.component';
import { RegistrarSalidaComponent } from './registrar-salida/registrar-salida.component';

const routes: Routes = [
  {path:'',redirectTo:'/RegistrarIngresoComponent',pathMatch: 'full'},
  {path:'AppComponent',component:AppComponent  },
  {path:'RegistrarIngresoComponent',component:RegistrarIngresoComponent  },
  {path:'RegistrarSalidaComponent',component:RegistrarSalidaComponent  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
