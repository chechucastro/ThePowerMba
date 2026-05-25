/*
    1.1 Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.
    1.2 Crea una variable llamada x, asigna el valor 50 a ella.
    1.3 Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10. 
    1.4 Crea una otra variable 'z' y asignale el valor de 'h' + 'y'.
*/
{
  let myFavoriteHero = "Hulk";
  let x = 50;
  let h = 5;
  let y = 10;
  let z = h + y;

  console.log(myFavoriteHero);
  console.log(x);
  console.log(h);
  console.log(y);
  console.log(z);
}

/*
    1.1 Dado el siguiente objeto, cambia el valor de la propiedad age a 25.
    const character = {name: 'Jack Sparrow', age: 10};

    1.2 Declara 3 variables con los nombres y valores siguientes 
        firstName = 'Jon'; 
        lastName = 'Snow'; 
        age = 24; 
    Muestralos por consola de esta forma: 
        'Soy Jon Snow, tengo 24 años y me gustan los lobos.'

    1.3 Dado el siguiente código, imprime con un console.log la suma del precio de
    ambos juguetes.
    const toy1 = {name: 'Buss myYear', price: 19};
    const toy2 = {name: 'Rallo mcKing', price: 29};

    1.4 Dado el siguiente código, actualiza el valor de la variable globalBasePrice a 25000 
    y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
    basePrice más el valor de la variable globalBasePrice.
    let globalBasePrice = 10000;
    const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
    const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
*/
{
  const character = { name: 'Jack Sparrow', age: 10 };
  character.age = 25;
  console.log(character);

  let firstName = 'Jon';
  let lastName = 'Snow';
  let age = 24;
  console.log(`Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos.`);

  const toy1 = { name: 'Buss myYear', price: 19 };
  const toy2 = { name: 'Rallo mcKing', price: 29 };
  console.log(toy1.price + toy2.price);

  let globalBasePrice = 10000; // Nuevo valor
  const car1 = { name: 'BMW m&m', basePrice: 50000, finalPrice: 60000 };
  const car2 = { name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000 };

  globalBasePrice = 25000;
  car1.finalPrice = car1.basePrice + globalBasePrice;
  car2.finalPrice = car2.basePrice + globalBasePrice;

  console.log(car1);
  console.log(car2);
}

/*
    1.1 Multiplica 10 por 5 y muestra el resultado mediante console.

    1.2 Divide 10 por 2 y muestra el resultado en un console.

    1.3 Muestra mediante un console el resto de dividir 15 por 9.

    1.4 Usa el correcto operador de asignación que resultará en o = 15, 
    teniendo dos variables p = 10 y j = 5.

    1.5 Usa el correcto operador de asignación que resultará en i = 50,
    teniendo dos variables c = 10 y m = 5.

*/ 
{
  console.log(10 * 5);
  console.log(10 / 2);
  console.log(15 % 9);

  let p = 10;
  let j = 5;

  let c = 10;
  let m = 5;

  let o = p + j;
  let i = c * m;

  console.log(p + j);
  console.log(c * m);
  console.log(o);
  console.log(i);
}

/*
    1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
    const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

    1.2 Cambia el primer elemento de avengers a "IRONMAN"
    const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

    1.3 console numero de elementos en el array usando la propiedad correcta de Array.
    const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

    1.4 Añade 2 elementos al array: "Morty" y "Summer". 
    Muestra en consola el último personaje del array
    const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

    1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
    const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

    1.6 Elimina el segundo elemento del array y muestra el array por consola.
    const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
*/
{
  const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
  console.log(avengers[0]);

  avengers[0] = "IRONMAN";
  console.log(avengers);
  console.log(avengers.length);

  const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

  rickAndMortyCharacters.push("Morty", "Summer");
  console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);

  rickAndMortyCharacters.pop();
  console.log(rickAndMortyCharacters[0], rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);

  rickAndMortyCharacters.shift();
  console.log(rickAndMortyCharacters);
}

/*
    Completar: 
    // ejemplo
    if(number1 === 10){
        console.log('number1 es estrictamente igual a 10')
    }
*/
{
  const number1 = 10;
  const number2 = 20;
  const number3 = 2;

  if (number2 / number1 === 2) {
    console.log("number2 dividido entre number1 es igual a 2");
  }

  if (number1 !== number2) {
    console.log("number1 es estrictamente distinto a number2");
  }

  if (number3 != number1) {
    console.log("number3 es distinto number1");
  }

  if (number3 * 5 === number1) {
    console.log("number3 por 5 es igual a number1");
  }

  if (number3 * 5 === number1 && number1 * 2 === number2) {
    console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
  }

  if (number2 / 2 === number1 || number1 / 5 === number3) {
    console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
  }
}

/*
    1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

    1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
    cuando el resto del numero dividido entre 2 sea 0.

    1.3 Crea un bucle para conseguir dormir contando ovejas. 
    Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
    Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle 
    y cambia el mensaje en la décima vuelta a 'Dormido!'.
*/
{
  // 1.1
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }

  // 1.2
  for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }

  // 1.3
  for (let i = 0; i < 10; i++) {
    console.log('Intentando dormir 🐑');
  }
}

/*
Completa la función que tomando dos números como argumento devuelva el más alto.
*/
{
  function getMaxNumber(numberOne , numberTwo) {
    if (numberOne > numberTwo) {
      return numberOne;
    } else {
      return numberTwo;
    }
  }

  console.log(getMaxNumber(10, 20));
}

/*
    Buscar la palabra más larga. 
    Completa la función que tomando un array de strings como argumento devuelva el más largo, 
    en caso de que dos strings tenga la misma longitud deberá devolver el primero.
 */
{
  const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

  function findLongestWord(param) {
    let longestWord = '';
    for (let i = 0; i < param.length; i++) {
      if (param[i].length > longestWord.length) {
        longestWord = param[i];
      }
    }
    return longestWord;
  }

  console.log(findLongestWord(avengers));
}

/*
    Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos. 
    Implementa la función denominada sumAll que toma un array de números como argumento y devuelve 
    la suma de todos los números de la matriz. 

*/
{
  const numbers = [1, 2, 3, 5, 45, 37, 58];

  function sumAll(param) {
    let sum = 0;
    // prefiero hacerlo con forEach.
    param.forEach(element => {
      sum += element;
    });
    return sum;
  }

  console.log(sumAll(numbers));
}

/*
Calcular un promedio (media) es una tarea extremadamente común. 
Puedes usar este array para probar tu función:
 */
{
  const numbers = [12, 21, 38, 5, 45, 37, 6];

  function average(param) {
    let sum = 0;
    for (const element of param) {
      sum += element;
    }
    return sum / param.length; // promedio de los elementos del array via el length 
  }

  console.log(average(numbers));
}

/*
    Calcular promedio de strings: 
    Crea una función que reciba por parámetro un array y 
    cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. 
*/
{
  const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

  function averageWord(param) {
    let sum = 0;
    for (const element of param) {
      if (typeof element === 'number') {
        sum += element;
      } else {
        sum += element.length;
      }
    }
    return sum / param.length;
  }

  console.log(averageWord(mixedElements));
}

/*
    Dado un array de strings, elimina los duplicados y devuelve un nuevo array con los elementos únicos.
    Valores únicos: Crea una función que reciba por parámetro un array y compruebe 
    si existen elementos duplicados, 
    en caso que existan los elimina para retornar un array sin los elementos duplicados. 
    Pista (cuando eliminamos algo de un array, su longitud se verá afectada)
*/
{
  const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(param) {
    let unique = []; // Creo un nuevo array con valores únicos usando el true/false de "includes"....
    for (const element of param) {
      if (!unique.includes(element)) {
        unique.push(element);
      }
    }
    return unique;
  }

  console.log(removeDuplicates(duplicates));

  // Mejor forma de hacerlo en mi opinión aunque no hemos llegado a ver el uso de "Set":
  function removeDuplicatesWithSet(param) {
    return [...new Set(param)];
  }

  console.log(removeDuplicatesWithSet(duplicates));
}

/*
Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que 
desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, 
en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. 
Puedes usar este array para probar tu función:
*/
{
  const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];

  function finderName(array, nameToFind) {
    return array.includes(nameToFind);
  }

  console.log(finderName(names, 'Peter')); // true
  console.log(finderName(names, 'John')); // false
}

/*
    Contador de repeticiones: Crea una función que nos devuelva el número de veces que se 
    repite cada una de las palabras que lo conforma. 
    Puedes usar este array para probar tu función:
*/
{
  const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];

  function repeatCounter(param) {
    let counter = {};
    for (const word of param) {
      if (counter[word]) {
        counter[word]++;
      } else {
        counter[word] = 1;
      }
    }
    return counter;
  }

  console.log(repeatCounter(counterWords));
  
  // Mejor forma de hacerlo en mi opinión aunque no hemos llegado a ver el uso de "reduce":
  const repeatCounterReduce = (param) =>
    param.reduce((counter, word) => {
      counter[word] = (counter[word] || 0) + 1;
      return counter;
    }, {});

  console.log(repeatCounterReduce(counterWords));
}

/*
    Usa includes: Haz un bucle y muestra por consola todos aquellos valores del array 
    que incluyan la palabra "Camiseta". 
    Usa la función .includes de javascript.
*/
{
  const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];

  function findProducts(param) {
    for (const product of param) {
      if (product.includes('Camiseta')) {
        console.log(product);
      }
    }
  }

  findProducts(products);
}

/*
    Probando For...of: 
    Usa un bucle forof para recorrer todos los destinos del array. 
    Imprime en un console.log sus valores.
*/
{
  const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar'];

  function printPlaces(param) {
    for (const place of param) {
      console.log(place);
    }
  }

  printPlaces(placesToTravel);
}

/*
Probando For...in: Usa un for...in para imprimir por consola los datos del alienígena.. 
Puedes usar este objeto:
*/
{
  const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
  };

  function printAlien(param) {
    for (const key in param) {
      console.log(key, param[key]);
    }
  }

  printAlien(alien);
}

/*

Probando For: Usa un bucle for para recorrer todos los destinos del array y
elimina los elementos que tengan el id 11 y 40. 
Imprime en un console log el array.

*/
{
  const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}];

  function removePlaces(param) {
    for (let i = 0; i < param.length; i++) {
      if (param[i].id === 11 || param[i].id === 40) {
        param.splice(i, 1);
      }
    }
    return param;
  }

  console.log(removePlaces(placesToTravel));

  // Mejor forma de hacerlo en mi opinión aunque no hemos llegado a ver el uso de "filter":
  const idsToRemove = [11, 40];

  const removePlacesFilter = (places) =>
    places.filter((place) => !idsToRemove.includes(place.id));

  console.log(removePlacesFilter(placesToTravel));
}

/*
    Mixed For e includes: Usa un bucle for para recorrer todos los juguetes 
    y elimina los que incluyan la palabra gato. 
    Recuerda que puedes usar la función .includes() para comprobarlo. 

*/
{
  const toys = [
    {id: 5, name: 'Buzz MyYear', sellCount: 10}, 
    {id: 11, name: 'Action Woman', sellCount: 24}, 
    {id: 23, name: 'Barbie Man', sellCount: 15}, 
    {id: 40, name: 'El gato con Guantes', sellCount: 8},
    {id: 40, name: 'El gato felix', sellCount: 35}
  ];

  function removeGato(param) {
    for (let i = 0; i < param.length; i++) {
      if (param[i].name.includes('gato')) {
        param.splice(i, 1);
      }
    }
    return param;
  }

  console.log(removeGato(toys));

  // Mejor forma de hacerlo en mi opinión aunque no hemos llegado a ver el uso de "filter":
  const removeGatoFilter = (toys) =>
    toys.filter((toy) => !toy.name.includes('gato'));

  console.log(removeGatoFilter(toys));

  /*
  For...of avanzado: Usa un bucle for...of para recorrer todos los juguetes y añade los que 
  tengan más de 15 ventas (sellCount) al array popularToys. 
  */
  const popularToys = [];

  function addPopularToys(param) {
    for (const toy of param) {
      if (toy.sellCount > 15) {
        popularToys.push(toy);
      }
    }
    return popularToys;
  }

  console.log(addPopularToys(toys));

  // Mejor forma de hacerlo en mi opinión aunque no hemos llegado a ver el uso de "filter":
  const addPopularToysFilter = (toys) =>
    toys.filter((toy) => toy.sellCount > 15);

  console.log(addPopularToysFilter(toys));

  /*
      Usa un bucle y dos condiciones para imprimir 
      por consola el nombre de los usuarios que sean menor de edad precedidos del texto

      "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, 
      precedido del texto "Usuarios mayores de edad:".
  */
  const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
  ];

  function printUsers(param) {
    for (const user of param) {
      if (user.years < 18) {
        console.log(`Usuarios menores de edad: ${user.name}`);
      } else {
        console.log(`Usuarios mayores de edad: ${user.name}`);
      }
    }
  }

  printUsers(users);

  // Mejor forma de hacerlo en mi opinión aunque no hemos llegado a ver el uso de "filter":
  const printUsersFilter = (users) =>
    users.filter((user) => user.years < 18 ? `Usuarios menores de edad: ${user.name}` : `Usuarios mayores de edad: ${user.name}`);

  console.log(printUsersFilter(users));

  /*
  Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. 
  Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.
  */
  const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
  const foodSchedule = [
    { name: "Heura", isVegan: true },
    { name: "Salmon", isVegan: false },
    { name: "Tofu", isVegan: true },
    { name: "Burger", isVegan: false },
    { name: "Rice", isVegan: true },
    { name: "Pasta", isVegan: true },
  ];

  function replaceFood(param) {
    for (const food of param) {
      if (!food.isVegan) {
        food.name = fruits.shift();
        food.isVegan = true; // Sabiendo que su nuevo valor es "forzosamente" una fruta :)
      }
    }
    return param;
  }

  console.log(replaceFood(foodSchedule));

  // Mejor forma de hacerlo en mi opinión aunque no hemos llegado a ver el uso de "filter":
  const replaceFoodFilter = (foodSchedule) =>
    foodSchedule.map((food) => !food.isVegan ? { ...food, name: fruits.shift() } : food);

  console.log(replaceFoodFilter(foodSchedule));

  /*
  Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. 
  Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. 
  Imprime cada array en por consola.
  */
  const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
  ];

  const moviesListCategories = {
    small: [],
    medium: [],
    large: [],
  };

  function listMovies(param) {
    for (const movie of param) {
      if (movie.durationInMinutes < 100) {
        moviesListCategories.small.push(movie);
      } else if (movie.durationInMinutes > 100 && movie.durationInMinutes < 200) {
        moviesListCategories.medium.push(movie);    
      } else if (movie.durationInMinutes > 200) {
        moviesListCategories.large.push(movie);
      }
    }
    return moviesListCategories;
  }

  console.log(listMovies(movies));

  // Mejor forma de hacerlo en mi opinión aunque no hemos llegado a ver el uso de "filter":
  const listMoviesFilter = (movies) => ({
    small: movies.filter((movie) => movie.durationInMinutes < 100),
    medium: movies.filter((movie) => movie.durationInMinutes > 100 && movie.durationInMinutes < 200),
    large: movies.filter((movie) => movie.durationInMinutes > 200),
  });

  console.log('Filtrado por categorías con filter:', listMoviesFilter(movies));

  /*
      Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos.
  */
  const products = [
    { name: "Funko Dr. Strange", sellCount: 10 },
    { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
    { name: "Sable laser FX", sellCount: 23 },
    { name: "Varita de Voldemort", sellCount: 6 },
  ];

  function sumSellCount(products) {
    let total = 0;
    for (const product of products) {
      total += product.sellCount;
    }
    return total;
  }

  console.log('Total de ventas:', sumSellCount(products));

  // Mejor forma de hacerlo en mi opinión aunque no hemos llegado a ver el uso de "reduce":
  const sumSellCountReduce = (products) =>
    products.reduce((total, product) => total + product.sellCount, 0);

  console.log('Total de ventas con reduce:', sumSellCountReduce(products));

  /*
      Usa un bucle para sumar el total de las ventas (sellCount) de todos 
      los productos y mostrar por consola la media de ventas.
  */
  function averageSellCount(products) {
    return sumSellCount(products) / products.length;
  }

  console.log('Media de ventas:', averageSellCount(products));

  // Mejor forma de hacerlo en mi opinión aunque no hemos llegado a ver el uso de "reduce":
  const averageSellCountReduce = (products) =>
    sumSellCountReduce(products) / products.length; 

  console.log('Media de ventas con reduce:', averageSellCountReduce(products));

  /*
      Usa un bucle para recorrer el array de productos (products) y añade al array goodProducts 
      los que tengan más de 20 ventas (sellCount)
      y al array badProducts los que tengan menos.
  */
  const goodProducts = [];
  const badProducts = [];

  function addProducts(param) {
    for (const product of param) {
      if (product.sellCount > 20) {
        goodProducts.push(product);
      } else {
        badProducts.push(product);
      }
    }
    return { goodProducts, badProducts };
  }

  console.log(addProducts(products));

  // Mejor forma de hacerlo en mi opinión aunque no hemos llegado a ver el uso de "filter":
  const addProductsFilter = (products) => ({
    goodProducts: products.filter((product) => product.sellCount > 20),
    badProducts: products.filter((product) => product.sellCount <= 20),
  });

  console.log(addProductsFilter(products));
}
