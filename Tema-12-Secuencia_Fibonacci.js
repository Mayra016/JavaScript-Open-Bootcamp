function numFibonacci(valor) {
    var lista = [1, 1];
    for (let i = 2; i < valor; i++) {
        //Identificar los elementos anteriores y sumarlos
        let num1 = Number(lista[i-1]);
        let num2 = Number(lista[i-2]);
        var elemento = num1 + num2;
        
        //Agregar y conferir si la secuencia ya fue concluida
        lista.push(elemento)
        if (i != valor) {
            continue
        } else {
            break
        }
    }
    
    console.log(lista);    
}
numFibonacci(20)
