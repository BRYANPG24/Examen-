import{concurso, concurso} from "./concurso";
import{computadora} from "./computadoras";
import{laboratorio} from "./laboratorio";
import{participante} from "./participante";
import{software} from "./software";

//creacion de instancias 

const concurso = new concurso();

const lab1 = new laboratorio("laboratorio_1", "logica basica"), 
const lab2 = new laboratorio("laboratorio_2", "logica avanzada");

const softwarelab1: Software[] = [
     new Software("visual studio"),
     new Software("postgreSQL"),
     new Software("SQL server"),
]

const softwarelab2: Software[] = [
    new Software("visual studio"),
    new Software("Eclipse"),
    new Software("MySQL"),
]

lab1.setSoftware(softwarelab1);

const participante1 = new participante("wisin dariyanki", "peter parker");
participante1.seleccionComputadora(comp1);
participante1.SoftwareAgregado(new software("visual studio"));
participante1.SoftwareAgregado(new software("PostgreSQL"));
concurso.agregarParticipante(participante1);

lab2.setSoftware(softwarelab1);
const participante2 = new participante("cardi b", "miley cirus");
participante2.seleccionComputadora(comp2);
participante2.SoftwareAgregado(new software("visual studio"));
participante2.SoftwareAgregado(new software("PostgreSQL"));
concurso.agregarParticipante(participante2);
