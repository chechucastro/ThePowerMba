/*
3.1 Dado el siguiente array, crea una copia usando spread operators.
*/
const pointsList = [32, 54, 21, 64, 75, 43];

const copyPointsList = [...pointsList];

console.log(`Array original: ${pointsList}`);
console.log(`Array copiado: ${copyPointsList}`);

/*
3.2 Dado el siguiente objeto, crea una copia usando spread operators.
*/

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyCopy = { ...toy };

console.log(`Toy original: ${toy}`);
console.log(`Toy copiado: ${toyCopy}`);


const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

const mergedPointsList = [...pointsList1, ...pointsLis2];

console.log(`Points list 1: ${pointsList1}`);
console.log(`Points list 2: ${pointsLis2}`);
console.log(`Points list merged: ${mergedPointsList}`);

/*
3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
con spread operators.
*/

const toy1 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};

const mergedToys = { ...toy1, ...toyUpdate };

console.log(`Toy 1: ${JSON.stringify(toy1)}`);
console.log(`Toy update: ${JSON.stringify(toyUpdate)}`);
console.log(`Toy merged: ${JSON.stringify(mergedToys)}`);

/*
3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
pero sin editar el array inicial. De nuevo, usando spread operatos.
*/
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const copyColors = [...colors];
copyColors.splice(2, 1);

console.log(`Colors: ${colors}`);
console.log(`Copy colors: ${copyColors}`);