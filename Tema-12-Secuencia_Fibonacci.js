function numFibonacci(valor) {
    if (num === 1) return [1]
    if (num === 2) return [1, 1]
    var lista = [1, 1];
    for (let i = 2; i < valor; i++) {
        //Identificar los elementos anteriores y sumarlos
        let num1 = Number(lista[i-1]);
        let num2 = Number(lista[i-2]);
        var elemento = num1 + num2;
        
        lista.push(elemento)
    }
    
    console.log(lista);    
}
numFibonacci(20)
