"use strict"

/*
Crea una aplicación web que pida al usuario palabras continuamente hasta que el popup se deje vacío o se cancele.
A continuación, se eliminarán todas las palabras repetidas y además se ordenarán en español, pero en orden inverso (de la Z a la A) y se mostrará el resultado por pantalla. Utilizar funciones flecha si se considera apropiado.
*/

//Al introducirlas en un set nos aseguramos que no haya repetidas
let words = new Set(getUserWords());

//Como set no tiene el metodo sort, podemos fabricar un array con los elementos del set y ordenarlo
words = [...words].sort((word1, word2) => word2.localeCompare(word1, "es"));

document.querySelector('.console').textContent = words;

