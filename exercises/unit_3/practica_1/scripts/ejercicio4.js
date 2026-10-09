"use strict"

/*                                ENUNCIADO
Mostrar por consola 50 combinaciones aleatorias de la lotería primitiva. Las combinaciones son 6
números del 1 al 49, pero debe tenerse en cuenta que no se pueden repetir los números en una
misma combinación.
*/

//Crea una combinación de 6 numeros diferentes del 1 al 49
function createCombination() {
   const COMBINATION_SIZE = 6;
   const MIN_VALUE = 1;
   const MAX_VALUE = 49;

   const numbers = new Set();
   while (numbers.size < COMBINATION_SIZE) {
      numbers.add(MIN_VALUE + Math.floor(Math.random() * MAX_VALUE)); 
   }

   return numbers;
}

//crea un array con la cantidad de combinaciones que le pases
function createCombinations(amount) {
   const combinations = [];

   for (let i = 0; i < amount; i++)
      combinations.push(createCombination());

   return combinations;
}

// Mostramos las combinaciones
function showCombinations(combinations) {
   for (let i = 0; i < combinations.length; i++) {
      console.log(`Combinación ${i + 1}: ` + [...combinations[i]]); //expandimos los valores del set para que salgan en linea
   }
}

const combinations = createCombinations(50);
showCombinations(combinations);

