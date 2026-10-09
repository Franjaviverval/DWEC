"use strict"

/*                                    ENUNCIADO
Crea un Map que almacene nombres como claves y edades como valores. Luego, agrega algunos
nombres y edades, actualiza la edad de uno de ellos, y finalmente imprime todos los nombres con sus
edades
*/

//Rellenaremos el map con los datos del ejercicio 1.
const people = new Map([['Nacho', 40], ['Ana', 35], ['Mario', 15], ['Laura', 17]]);

//Agregamos un par mas de personas

people.set('Pedro', 25).set('Julia', 37);

//Actualizaremos el valor de Mario de 15 a 25

people.set('Mario', 25);

/*
Podriamos usar un console.log(people) para mostrarlo pero lo imprimiremos recorriendolo
con un "for of" para una impresión personalizada.
*/

for (let [key, value] of people) {
   console.log(`${key} tiene ${value} años`);
}

