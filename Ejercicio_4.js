// 4.1 Dado el siguiente array, devuelve un array con sus nombres
// utilizando .map().
const users = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
]

const arrayNombres = users.map((user) => user.name)
console.log(arrayNombres)

console.log('--------------------------')
// 4.2 Dado el siguiente array, devuelve una lista que contenga los valores
// de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que
// empiece por 'A'.

//! He modificado el nombre de la variable para con haya confilctos con los otros apartados del ejercicio

const users2 = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
]

const nombres = users2.map((user) => {
  if (user.name[0] === 'A') {
    return 'Anacleto'
  } else {
    return user.name
  }
})
console.log(nombres)

console.log('--------------------------')
// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores
// de la propiedad .name y añade al valor de .name el string ' (Visitado)'
// cuando el valor de la propiedad isVisited = true.

const cities = [
  { isVisited: true, name: 'Tokyo' },
  { isVisited: false, name: 'Madagascar' },
  { isVisited: true, name: 'Amsterdam' },
  { isVisited: false, name: 'Seul' }
]
const visited = cities.map((city) => {
  if (city.isVisited === true) {
    console.log(city.isVisited, ' (Visitado)')
  }
})
