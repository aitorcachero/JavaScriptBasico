// - La fecha de hoy
fechaHoy = new Date();

// - La fecha de tu nacimiento
fechaNacimiento = new Date(1983, 05, 05);

// - Una variable que contenga el día de tu nacimiento
const dia = fechaNacimiento.getDate();

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
let mes = fechaNacimiento.getMonth() + 1;

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const year = fechaNacimiento.getFullYear();

switch (mes) {
  case 1:
    mes = 'Enero';
    break;
  case 2:
    mes = 'Febrero';
    break;
  case 3:
    mes = 'Marzo';
    break;
  case 4:
    mes = 'Abril';
    break;
  case 5:
    mes = 'Mayo';
    break;
  case 6:
    mes = 'Junio';
    break;
  case 7:
    mes = 'Julio';
    break;
  case 8:
    mes = 'Agosto';
    break;
  case 9:
    mes = 'Septiembre';
    break;
  case 10:
    mes = 'Octubre';
    break;
  case 11:
    mes = 'Noviembre';
    break;
  case 12:
    mes = 'Diciembre';
    break;
}

console.log(dia + ' de ' + mes + ' de ' + year);
