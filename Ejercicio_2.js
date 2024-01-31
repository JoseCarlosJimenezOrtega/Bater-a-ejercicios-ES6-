// 2.1 En base al siguiente javascript, crea variables en base a las propiedades
// del objeto usando object destructuring e imprimelas por consola. Cuidado,
// no hace falta hacer destructuring del array, solo del objeto.

const game = {
  title: 'The last us 2',
  gender: ['action', 'zombie', 'survival'],
  year: 2020
}

const { title, gender, year } = game

console.log(title, gender, year)

// 2.2 En base al siguiente javascript, usa destructuring para crear 3 variables
// llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
// imprimelo por consola.

const fruits = ['Banana', 'Strawberry', 'Orange']

const [fruit1, fruit2, fruit3] = fruits
console.log(fruit1, fruit2, fruit3)

// 2.3 En base al siguiente javascript, usa destructuring para crear 2
// variables igualandolo a la función e imprimiendolo por consola.

//!! Esto es la solcuion del ejercicio, lo he comentado por el nombre de las variables...
//* const animalFunction = () => {
//*   return { name: 'Bengal Tiger', race: 'Tiger' }
//* }

//* const { name = animalFunction, race } = animalFunction()
//* console.log('${animalFunction}, ${race}')

// 2.4 En base al siguiente javascript, usa destructuring para crear las
// variables name y itv con sus respectivos valores. Posteriormente crea
// 3 variables usando igualmente el destructuring para cada uno de los años
// y comprueba que todo esta bien imprimiendolo.

const car = { name: 'Mazda 6', itv: [2015, 2011, 2020] }

const { name, itv } = car

const [itv2, itv1, itv3] = itv
console.log('el coche es un', name)
console.log('la primera la pasó en', itv1)
console.log('la segunda la pasó en', itv2)
console.log('la tercera la pasó en', itv3)
