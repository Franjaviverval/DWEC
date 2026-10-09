"use strict"

/*                           ENUNCIADO
Crea un array llamado valores que contenga números, algunos de los cuales son duplicados. Utiliza
un Set para crear un nuevo array que contenga solo los números únicos y luego imprímelo.
*/

/*
Meteremos números del 1 al 9 y posteriormente varios digitos mas. Así será fácil observar que
únicamente aparecen los digitos del 1 al 9 sin repeticiones.*/

const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 5, 8, 7, 4, 3, 2, 1, 4, 6, 7];

const uniqueValues = new Set(valores);

console.log(uniqueValues);