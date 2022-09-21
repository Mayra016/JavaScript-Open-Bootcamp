const informaciones = {
    nombre : "Máyra",
    apellido : "Zucaro Boutakis",
    edad : 24,
    altura : 1.7,
    eresDesarrollador :true
    
}
const edad = informaciones.edad;

const infoErica ={ ...informaciones };
infoErica.nombre = "Érica";
infoErica.apellido = "Kawabe Faleiros";
infoErica.edad = 24;
infoErica.altura = 1.6;
infoErica.eresDesarrollador = false;

const infoPatricia = {...informaciones };
infoPatricia.nombre = "Patricia";
infoPatricia.apellido = "Kerolin";
infoPatricia.edad = 27;
infoPatricia.altura = 1.75;
infoPatricia.eresDesarrollador = false;

const lista = [informaciones, infoErica, infoPatricia];
console.log(lista);
