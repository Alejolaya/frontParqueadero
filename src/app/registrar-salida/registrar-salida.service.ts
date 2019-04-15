import { ParqueoModel } from './../model/parqueo.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestResponse } from '../model/restResponse.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrarSalidaService {

  constructor(private http:HttpClient) { }

  /**
   * Metodo para validar campos obligatorios
   */
  public validate(parqueo:ParqueoModel):boolean{
    let isValid = true;

    if(!parqueo.placa){
      isValid = false;
    }

    return isValid;
  }
  public registrarSalida(parqueo:ParqueoModel):Observable<RestResponse>{
    return this.http.post<RestResponse>("http://localhost:8080/RegistrarSalida",JSON.stringify(parqueo));
  }


}
