const fecha = new Date;
const nascimiento = new Date(1997, 10, 13, 21, 00, 13, 00);
console.log(nascimiento);
console.log(fecha);

if (fecha.getTime > nascimiento.getTime) {
    console.log("La fecha es después de tu cumpleaños");
            
}   else if(fecha.getTime <nascimiento.getTime) { 
        console.log("Todavía no has nascido.¿Es Usted un viajero del tiempo?");
            
}   else {
            console.log("Has nascido hoy");
}

const diaNacimiento = nascimiento.getDate();
const mesNascimiento = nascimiento.getMonth() + 1;
const anyoNascimiento = nascimiento.getFullYear();
console.log(diaNacimiento, mesNascimiento, anyoNascimiento);
