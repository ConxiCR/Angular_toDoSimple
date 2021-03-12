export class Tarea {
    title: string;
    description: string;

    //parametros y su inicialización + valores opciones(como no vienen definidos les damos valor vacio)
    constructor(pTitle = '', pDescription=''){
        this.title      = pTitle;
        this.description = pDescription;
    }
}
