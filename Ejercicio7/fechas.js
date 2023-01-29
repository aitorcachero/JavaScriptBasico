// - La fecha de hoy
fechaHoy = new Date()

// - La fecha de tu nacimiento
fechaNacimiento = new Date(1983, 05, 05)

// - Una variable que contenga el día de tu nacimiento
const dia = fechaNacimiento.getDate()

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mes = fechaNacimiento.getMonth() +1

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const year = fechaNacimiento.getFullYear()
