import{participante} from "./participante"

export class concurso {
    private participante: participante [];

    constructor() {
        this.participante = [];
    }

    agregarParticipante( Participante: participante): void {
        this.participante = Participante.push(participante);
    }

    mostrarDetallesDeParticipantes{}: void {
        this.participantes.forEach((participante) => {
            console.log("nombre de participante", participante.nombre);
            console.log("modalidad del concurso escogido", participante.modalidad);
            console.log("laboratorio", participante.computadora.laboratorio.nombre);
            console.log("equipos a usar", participante.computadora.nombre);
            console.log("Software implementado por el laboratorio", participante.computadora.laboratorio.mostrarSoftware());
            console.log("software requerido por el alumno", participante.mostrarSoftware();
        console.log("---------------------------------");
         )
        });
    }
}
