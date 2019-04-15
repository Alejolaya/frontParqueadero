import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";


import { RestResponse } from '../model/restResponse.model';
import { VehiculoModel } from './../model/vehiculo.model';


@Injectable({
  providedIn: 'root'
})
export class RegistrarIngresoService {

  constructor(private http:HttpClient) { }
/**
 * Metodo para validar campos obligatorios
 * @param vehiculo 
 */
  public validate(vehiculo:VehiculoModel):boolean{
    let isValid = true;

    if (!vehiculo.placa){
      isValid = false;
    }
    if (!vehiculo.tipoVehiculo){
      isValid = false;
    }


    return isValid;
  }

  public registrar(vehiculo:VehiculoModel):Observable<RestResponse>{
    return  this.http.post<RestResponse>("http://localhost:8080/RegistrarIngreso",JSON.stringify(vehiculo));
     
  }
}
