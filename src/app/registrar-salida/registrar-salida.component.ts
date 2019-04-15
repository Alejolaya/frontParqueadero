import { Component, OnInit } from '@angular/core';


import { RegistrarSalidaService } from './registrar-salida.service';
import { ParqueoModel } from './../model/parqueo.model';
import { OK } from '../model/httpStatus';

@Component({
  selector: 'app-registrar-salida',
  templateUrl: './registrar-salida.component.html',
  styleUrls: ['./registrar-salida.component.css'],
  providers:[RegistrarSalidaService]
})
export class RegistrarSalidaComponent implements OnInit {
  private parqueo: ParqueoModel;
  private isValid: boolean = true;
  private message: string = "";
  private isOK :boolean=false;
  private messageCobro: string = "";

  constructor(private registrarSalidaService: RegistrarSalidaService) {
    this.parqueo = new ParqueoModel();
   }

  ngOnInit() {
  }
  public registrarSalida():void{
    this.isValid = this.registrarSalidaService.validate(this.parqueo);
    if(this.isValid){
      this.registrarSalidaService.registrarSalida(this.parqueo).subscribe(res=>{
        if(res.responseCode == OK){
          this.isOK=true;
          this.messageCobro=res.message;
        }else{
          this.message=res.message;
          this.isValid=false;
          this.isOK = false;
        }
      });
    }else{
      this.message="los campos con * son obligatorios"
      this.isOK = false;
    }
    
  }
}
