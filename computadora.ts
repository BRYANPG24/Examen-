import {laboratorio} from "./laboratorio"

export class computadora {
    nombre: string;
    laboratorio: laboratorio;

    constructor( Nombre: string, Laboratorio: laboratorio) {
        this.nombre = Nombre;
        this.laboratorio = Laboratorio;
    }
}
