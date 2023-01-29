// - Un nuevo Set con los nombres de tu familia
const nombres = ["Aitor", "Susana", "Nati"]
const mySet = new Set(nombres)

// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
mySet.add("Aitor")
console.log(mySet)

// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
mySet.add("Javascript")

