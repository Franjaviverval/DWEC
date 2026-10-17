"use strict"

/*
Crea una aplicación web que pida al usuario palabras continuamente hasta que el popup se deje vacío o se cancele.
Crear una función que recibirá todas las palabras y devolverá un mapa que contenga como clave cada palabra
y cuyo valor será el número de veces que aparece esa palabra en el array. Mostrar los resultados por pantalla
*/

function countWords(words) {
   const wordsMap = new Map();

   for (let word of words) {
      if (wordsMap.has(word))
         wordsMap.set(word, wordsMap.get(word) + 1); //Si ya esta en el map, le sumanos 1 a su contador
      else
         wordsMap.set(word, 1);  //Si no esta, la agregamos
   }

   return wordsMap;
}

//Crea una nueva linea en nuestro elemento consola
function writeLine(line) {
   const paragraph = document.createElement('P');
   paragraph.textContent = line;
   document.querySelector('.console').append(paragraph);
}

//Creamos nuestro map a partir de las palabras que nos pasa el usuario
let words = countWords(getUserWords());

//Mostramos las repeticiones de cada palabra
words.forEach((value, key) => {
   writeLine(`${key} => ${value}`);
});