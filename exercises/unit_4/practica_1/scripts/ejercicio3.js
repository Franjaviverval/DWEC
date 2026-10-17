"use strict"
/*
Crea una función que se llame filtro y que reciba un array y una función callback. La
función callback se entenderá que sólo tiene un parámetro. Esta función se aplicará a
cada elemento del array y el resultado volverá a guardarse en el mismo array
*/

//Funciones Anonimas
const duplicar = number => number * 2;
const toUpper = word => word.toUpperCase();
const factorial = number => number < 2 ? 1 : number * factorial(number - 1);


//Mi funcion Filtro que aplica modificacion a todos los valores
function filtro(valores, modificacion) {
   for (let i = 0; i < valores.length; i++)
      valores[i] = modificacion(valores[i]);
}

//Arrays de prueba
const numbers = [2, 3, 4];
const words = ['hola', 'adiós', 'clavel'];


//Test de mi funcion filtro duplicando, pasando a mayusculas y obteniendo el factorial
console.log('Valores iniciales: ' + numbers);
filtro(numbers, duplicar);
console.log('Valores despues de duplicar: ' + numbers);

console.log('Valores iniciales: ' + words);
filtro(words, toUpper);
console.log('Valores después de toUpper: ' + words);

console.log('Valores iniciales: ' + numbers);
filtro(numbers, factorial);
console.log('Valores después de factorial: ' + numbers);