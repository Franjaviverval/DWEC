"use strict"

/*
Estoy utilizando el atributo hidden para ocultar o mostrar elementos.
cambiando el style.display a none o block conseguiria el mismo efecto.
*/

/* 
   bloque1 + @ + bloque2 + . + bloque3
   bloque = \D+\w* => 1 o mas caracteres + 0 o más caracteres alfanumericos que queramos
   de esta forma el primer caracter ha de ser una letra y no un número.
*/
function verifyEmail() {
   const regexpr = /^\D+\w*@\D+\w*\.\D+\w*$/;
   return regexpr.test(document.getElementById('input-email').value);
}

function verifyPassword() {
   const MIN = 8;
   const MAX = 10;
   const pass_lenght = document.getElementById('input-password').value.length;
   return pass_lenght >= MIN && pass_lenght <= MAX;
}

function verifyState() {
   return verifyEmail() && verifyPassword();
}


document.getElementById('input-email').addEventListener('blur', function () {
   if (verifyEmail())
      document.getElementById('email-fail').setAttribute('hidden', '');  //mensaje oculto si se verifica
   else
      document.getElementById('email-fail').removeAttribute('hidden');   //mostramos el mensaje si no se verifica

   document.getElementById('btn-submit').disabled = !verifyState();      //estado del boton depende de si ambos estan verificados
});

document.getElementById('input-password').addEventListener('blur', function () {
   if (verifyPassword())
      document.getElementById('password-fail').setAttribute('hidden', ''); //mensaje oculto si se verifica
   else
      document.getElementById('password-fail').removeAttribute('hidden');  //mostramos el mensaje si no se verifica
   
   document.getElementById('btn-submit').disabled = !verifyState();        //estado del boton depende de si ambos estan verificados
});
