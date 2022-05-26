import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  usuario: string; 
  constructor() { }

  setUsuario(data){
    this.usuario=data;
  }

  getUsuario(){
    return this.usuario;
  }
}
