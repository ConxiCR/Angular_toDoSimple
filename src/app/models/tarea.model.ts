export class Tarea {
    titulo: string;
    descripcion: string;

    //parametros y su inicialización + valores opciones(como no vienen definidos les damos valor vacio)
    constructor(pTitulo= '', pDescripcion=''){
        this.titulo      = pTitulo;
        this.descripcion = pDescripcion;
    }
}
