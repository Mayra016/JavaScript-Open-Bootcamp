class Estudiante {
    nombre;
    asignatura;
    
    constructor(nombre, asignatura) {
        this.nombre = nombre;
        this.asignatura = ["Javascript", "HTML", "CSS"];
    }
    
    obtenDatos() {

        const persona = {
            Nombre : this.nombre,
            Asignatura : this.asignatura
        }  
       return persona
    }
}

const estudiante1 = new Estudiante("Julia");

console.log(estudiante1.obtenDatos());
