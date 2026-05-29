/*

Dado el siguiente javascript usa forof y forin para hacer la media del 
volumen de todos los sonidos favoritos que tienen los usuarios.

*/


const users = [
    {
      name: "Alberto",
      favoritesSounds: {
        waves: { format: "mp3", volume: 50 },
        rain: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Antonio",
      favoritesSounds: {
        waves: { format: "mp3", volume: 30 },
        shower: { format: "ogg", volume: 55 },
        train: { format: "mp3", volume: 60 },
      },
    },
    {
      name: "Pedro",
      favoritesSounds: {
        shower: { format: "mp3", volume: 50 },
        train: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Cristina",
      favoritesSounds: {
        waves: { format: "mp3", volume: 67 },
        wind: { format: "ogg", volume: 35 },
        firecamp: { format: "mp3", volume: 60 },
      },
    },
  ];

  let totalVolume = 0;

  for (const user of users) {
    for (const sound in user.favoritesSounds) {
      totalVolume += user.favoritesSounds[sound].volume;
    }
  }

  console.log(`total Volume: ${totalVolume}`);

  /*
  Dado el siguiente javascript usa forof y forin para saber cuantas veces ha 
sido cada sonido agregado por los usuarios a favorito.

Para ello recorre la lista de usuarios y usa forin para recoger el nombre 
de los sonidos que el usuario tenga como favoritos.

Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada 
vez que ese sonido se repita como favorito en cada usuario.

Este ejercicio es un poco complicado con los conocimientos actuales pero...a 
la vez un buen reto y oportunidad para comprender que hay muchas formas de 
hacer las cosas en javascript.

*/

let soundsCount = {};

for (const user of users) {
  for (const sound in user.favoritesSounds) {
    soundsCount[sound] = (soundsCount[sound] || 0) + 1;
  }
}

console.log(soundsCount);


/*
Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

Haz varios ejemplos y compruebalos.

Sugerencia de función:
function findArrayIndex(array, text) {}
*/

const mainCharacters = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",
    "Anakin",
    "Obi-Wan",
  ];

  const findArrayIndex = (array, text) => {
    return array.indexOf(text);
  }

  console.log(`Find index of Anakin: ${findArrayIndex(mainCharacters, "Anakin")}`);
  console.log(`Find index of Leia: ${findArrayIndex(mainCharacters, "Leia")}`);

  /*

  Usando la función anterior beneficiate de poder conocer el indice del array 
para crear una función llamada removeItem que pasandole un array y un texto 
como parametros (los mismos parametros que en el anterior ejercicio) llame a 
la función anteriormente creada findArrayIndex y obten el indice para 
posteriormente usar la función de javascript .splice() para eliminar el 
elemento del array.

Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan 
correctamente.

*/

const mainCharacters2 = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",
    "Anakin",
    "Obi-Wan",
  ];
const removeItem = (array, text) => {
  const index = findArrayIndex(array, text);
  array.splice(index, 1);
  return array;
}

console.log(`Remove item: ${removeItem(mainCharacters2, "Anakin")}`);
console.log(`Remove item: ${removeItem(mainCharacters2, "Leia")}`);