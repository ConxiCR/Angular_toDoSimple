import { Component } from '@angular/core';
import { Tarea } from './models/tarea.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toDoSimple';
  arrTareas: Tarea[]; //tipo tarea array(muchas tareas). Comprobar si ha hecho el import arriba
  
  //inicializar array
  constructor(){
    this.arrTareas = [];
  }
  
  onTareaCreada($event){
    //console.log($event);//para ver si la tarea llega al padre
    this.arrTareas.push($event); //event tarea que se envia des del componente hijo
    //console.log(this.arrTareas); //para ver como se va rellenando la array de tareas
  }
  
}
