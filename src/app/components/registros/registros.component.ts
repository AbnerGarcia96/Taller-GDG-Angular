import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.scss']
})
export class RegistrosComponent {
  registros: any;
  registroNuevo: any;

  constructor() {
    this.registros = [{
      nombre: 'Abner',
      edad: 22
    }];
    this.registroNuevo = {};
  }

  agregarRegistro(){
    this.registros.push(this.registroNuevo);
  }

  eliminarTodos(){
    this.registros = [];
  }
}
