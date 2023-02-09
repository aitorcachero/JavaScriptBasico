// Una cadena de texto con tu Nombre
const nombre = "Aitor"
// Otra cadena de texto con tu Apellido
const apellido = "Cachero"
// Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
const estudiante = `${nombre} ${apellido}`

// Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
estudianteMayus = `${nombre.toUpperCase()} ${apellido.toUpperCase()}`

// Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
estudianteMinus = `${nombre.toLowerCase()} ${apellido.toLowerCase()}`

// Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
const espacio = estudiante.length

// Una variable que contenga la primera letra del Nombre
const primeraletranombre = nombre[0]

// Otra variable que contenga la última letra del Apellido
const primeraletraapellido = apellido[0]

// Una cadena de texto que elimine los espacios de la variable "estudiante"
const eliminarespacios = estudiante.replace(/ /g, "")

// Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
const compruebanombre = estudiante.includes(nombre)
