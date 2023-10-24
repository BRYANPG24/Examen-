import {computadora} from "./computadoras";
import {software} from "./software";

export class participante {
    nombre: string;
    modalidad: string;
    Computadora: computadora;
    software: software [];

    constructor( Nombre: string, Modalidad: string) {
        this.nombre = Nombre;
        this.modalidad = Modalidad;
        this.software = [];

    }

    seleccionComputadora:(computadora: computadora): void {
        this.Computadora = computadora;
    }

    agregarSoftware:(Software: software): void {
        this.software. push(Software);
    }

    mostrarSoftware(): void {
        this.software.forEach((sw) => {
            console.log(sw.nombre);
        })
    }
}
export class software {
    nombre: string;


    constructor(Nombre: string) {
        this.nombre=Nombre;
    }
}
