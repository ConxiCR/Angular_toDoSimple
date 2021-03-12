import { Component, OnInit, Input } from '@angular/core';
import { Tarea } from '../../models/tarea.model';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() tareas: Tarea[];//comprobar el import arriba
  constructor() {
    
   }

  ngOnInit(): void {
  }
  //creo metodo para enseñar por pantalla listado de tareas
  mostrarTareas(){
    let resultado = '<ul>';
    for(let tarea of this.tareas){
      resultado += `<li>${tarea.title} - ${tarea.description}</li>`
    }
    resultado += '<ul>';
    return resultado;
  }

}
