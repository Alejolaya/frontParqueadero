import { Component, OnInit } from '@angular/core';
import { RegistrarIngresoService } from './registrar-ingreso.service';

import { VehiculoModel } from './../model/vehiculo.model';
import { OK } from '../model/httpStatus';


@Component({
  selector: 'app-registrar-ingreso',
  templateUrl: './registrar-ingreso.component.html',
  styleUrls: ['./registrar-ingreso.component.css'],
  providers:[RegistrarIngresoService]
})
export class RegistrarIngresoComponent implements OnInit {
  private vehiculo: VehiculoModel;
  private isValid : boolean= true;
  private message : string = "";
  constructor(private registrarIngresoService: RegistrarIngresoService) {
    this.vehiculo = new VehiculoModel();
   }

  ngOnInit() {
  }

  public registrar():void{
    this.isValid = this.registrarIngresoService.validate(this.vehiculo);

    if(this.isValid){
      this.registrarIngresoService.registrar(this.vehiculo).subscribe(res=>{
        if(res.responseCode == OK){

        }else{
          this.message=res.message;
          this.isValid= false;
        }
      });
    }else{
      this.message="Los campos con * son obligatorios"
    }


  }

}
