/*
Crea una función llamada swap que reciba un array y dos parametros que sean 
indices del array. La función deberá intercambiar la posición de los valores de 
los indices que hayamos enviado como parametro. Retorna el array resultante.

*/
const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

const swap = (array, index1, index2) => {
	[array[index1], array[index2]] = [array[index2], array[index1]]; // Intercambio de valores usando destructuring
	return array;
};

console.log(`Swap: ${swap(fantasticFour, 0, 1)}`);
console.log(`Swap: ${swap(fantasticFour, 2, 3)}`);
console.log(`Swap: ${swap(fantasticFour, 0, 3)}`);