const fecha = new Date;

const nascimiento = new Date(1997, 10, 13);

const comparacion = fecha > nascimiento;

const diaNacimiento = nascimiento.getDate();
const mesNascimiento = nascimiento.getMonth() + 1;
const anyoNascimiento = nascimiento.getFullYear();
