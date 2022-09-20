let listaCompra = ["aguacate", "huevos", "sal", "shoyu", "maíz"];
listaCompra.push("Aceite de Girasol");

listaCompra.pop("Aceite de Girasol");
const pelisFav = [
    { titulo : "Harry Potter y la cámara de los secretos", director : "Chris Columbus", fecha : 2002 },
    { titulo : "El teléfono negro", director : "Scott Derrickson", fecha : 2022 },
    { titulo : "Presagio", director : "Alex Proyas", fecha : 2009 }
    ]
    
const pelisDespues2010 = pelisFav.filter(pelis => { 
    if (pelis.fecha > 2010) {
        return true
    }    
})

const listaDirectores = pelisFav.map(pelis => {
    return pelis.director
})

const listaTitulos = pelisFav.map(pelis => {
    return pelis.titulo
})

const tituloyDirectores = listaTitulos.concat(listaDirectores);

const propagacion = [...listaDirectores, ...listaTitulos];
