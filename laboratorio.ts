import {software} from "./software";

export class laboratorio {
    nombre: string
    categoria:string
    software: software [];


    constructor( Nombre: string, Categoria: string) {
        this.nombre = Nombre;
        this.categoria = Categoria;
        this.software = [];
    }

    setSoftware(Software: software[]): void {
        this.software = Software;
    }

    mostrarSoftware(): void {
        this.software.forEach((sw) => {
            console.log(sw.nombre);
        });
    }

}
