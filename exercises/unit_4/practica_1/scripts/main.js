"use strict"

function getUserWords() {
   const words = [];

   while (true) {
      const word = window.prompt('Introduzca una palabra o deje en blanco para cancelar');

      if (word == null || word.trim() === '')
         break;

      words.push(word);
   }

   return words;
}

