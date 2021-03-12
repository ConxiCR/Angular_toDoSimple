import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';


@Component({
  selector: 'formulary',
  templateUrl: './formulary.component.html',
  styleUrls: ['./formulary.component.css']
})
export class FormularyComponent implements OnInit {
  //genero output con evento
  @Output() tareaCreada: EventEmitter<Tarea>;
  //component de tipo tarea. Viene del modelo creado
  nuevaTarea: Tarea;//lo importa arriba
  

  constructor() { 
    this.nuevaTarea = new Tarea();//inicializamos la nueva tarea. objeto para incluir los datos
    this.tareaCreada = new EventEmitter();
  }

  ngOnInit(): void {
   
  }
  onClick(){
    //console.log('Pulsado');
    this.tareaCreada.emit(this.nuevaTarea);//emite la nueva tarea
    this.nuevaTarea = new Tarea();//para borrar los campos de texto
  }
}
