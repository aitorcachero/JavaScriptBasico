// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datos = {
    nombre: "Aitor",
    apellido: "Cachero",
    edad: 39,
    altura: 178,
    isDeveloper: true,
}

// - Una variable que obtenga tu edad a partir del objeto anterior
const edad = datos.edad

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const amigos = [
    { ...datos
    },{
        nombre: "Sergio",
        apellido: "Lenza",
        edad: 34, 
        altura: 183,
        isDeveloper: true,
    },{
        nombre: "Susana",
        apellido: "Horia",
        edad: 41,
        altura: 170,
        isDeveloper: true
    }
]

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const listaOrdenada = amigos.sort((a, b) => b.edad - a.edad)



