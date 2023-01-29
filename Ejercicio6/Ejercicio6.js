// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listaCompra = ["Tomates", "Lechuga", "Pan", "Carne", "Pescado"]

// - Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompra.push("Aceite de Girasol")

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.pop()

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculas = [
    { titulo: "Matrix", director: "Lana Wachowski", fecha: 1999},
    { titulo: "Ocean Eleven", director: "Steven Soderbergh", fecha: 2001},
    { titulo: "El lobo de Wall Street", director: "Martin Scorsese", fecha: 2014},
]

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const peliculas2010 = peliculas.filter(valor => valor.fecha > 2010)

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = peliculas.map(valor => valor.director)

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = peliculas.map(valor => valor.titulo)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const concatenacion = directores.concat(titulos)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const propagacion = [...directores, ...titulos]
