// Función siempre true
function ejecutado() {
    return true
}

// Función asincrona que tarda 5 segundos 
function* asincrona() {
    let i = 0;
    while (true) {
        i++;
        if (i = 6) {
           console.log("Hola soy una promesa");
        }
        yield i;
    }
}

// Genera índices pares al azar
function iPares() {
    let i = Math.ceil(Math.random() * 100);
        if (i % 2 === 0 && i !== 0) {
            console.log(i);

        } else {
            iPares()
        }
}
