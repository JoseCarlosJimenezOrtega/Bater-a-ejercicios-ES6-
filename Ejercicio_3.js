// 3.1 Dado el siguiente array, crea una copia usando spread operators.

const pointsList = [32, 54, 21, 64, 75, 43]
const copiaList = [...pointsList]
console.log(copiaList)
console.log(copiaList === pointsList)

console.log('----------------------------')
// 3.2 Dado el siguiente objeto, crea una copia usando spread operators.

const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }
const copiaToy = { ...toy }
console.log(copiaToy)
console.log(copiaToy === toy)

console.log('----------------------------')

// 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando
// spread operatos.

//!he modificado el nombre de la variable para que no haya conflictos con los apartados...

const pointsLis = [32, 54, 21, 64, 75, 43]
const pointsLis2 = [54, 87, 99, 65, 32]
const totalList = [...pointsLis, ...pointsLis2]
console.log(totalList)

console.log('----------------------------')

// 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos
// con spread operators.

//!he modificado el nombre de la variable para que no haya conflictos con los apartados...

const toys = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }
const toyUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] }
const totalToys = { ...toys, ...toyUpdate }
console.log(totalToys)

console.log('----------------------------')

// 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2
// pero sin editar el array inicial. De nuevo, usando spread operatos.

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']
const colorsModificado = [...colors]
colorsModificado.splice(2, 1)
console.log(colorsModificado)
