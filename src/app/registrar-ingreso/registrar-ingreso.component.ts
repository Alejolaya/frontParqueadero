import { VehiculoModel } from './../model/vehiculo.model';
import { Component, OnInit } from '@angular/core';
import { RegistrarIngresoService } from './registrar-ingreso.service';

@Component({
  selector: 'app-registrar-ingreso',
  templateUrl: './registrar-ingreso.component.html',
  styleUrls: ['./registrar-ingreso.component.css'],
  providers:[RegistrarIngresoService]
})
export class RegistrarIngresoComponent implements OnInit {
  private vehiculo: VehiculoModel
  constructor() {
    this.vehiculo = new VehiculoModel();
   }

  ngOnInit() {
  }



}
