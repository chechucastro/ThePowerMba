/*
7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de 
los alumnos usando la función .reduce().
*/
const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const sumScore = exams.reduce((acc, exam) => acc + exam.score, 0);

console.log(`Sum of scores: ${sumScore}`);

/*
7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los 
alumnos que esten aprobados usando la función .reduce().
*/
const sumScoreBiggerThan5 = exams.reduce((acc, exam) => exam.score > 5 ? acc + exam.score : acc, 0);

console.log(`Sum of scores bigger than 5: ${sumScoreBiggerThan5}`);

/*
7.3 Dado el mismo array, haz una media de todos las notas de los examenes de los 
alumnos usando la función .reduce().
*/
const averageScore = exams.reduce((acc, exam) => acc + exam.score, 0) / exams.length;

console.log(`Average score: ${averageScore}`);


/*
8.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando 
.filter() y usa .reduce() para conseguir la media de sus .score. 
La función .find() también podría ayudarte para el contrar el genero 'RPG' en el 
array .gender.
*/
const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10},
];

const filterByRpgGender = videogames.filter(videogame => videogame.genders.find(gender => gender === 'RPG'));

const averageScoreRpgGender = filterByRpgGender.reduce((acc, videogame) => acc + videogame.score / filterByRpgGender.length, 0); // Media

console.log(`Reduce by gender: ${averageScoreRpgGender}`);

