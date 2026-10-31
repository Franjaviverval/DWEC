"use strict"

function getRandomImage() {                               //Usamos la web picsum para traer una imagen aleatoria
   const seed = Math.floor(Math.random() * 100);          //Generamos una semilla
   return `https://picsum.photos/seed/${seed}/1920/1080`; //generamos una url con con la semilla incluida
}

document.addEventListener('keydown', e => {
   /*
     Se cambiara de imagen con la combinacion ALT + F12 o Control + b
     por si la primera combinacion no está disponible en el pc tal y 
     como sugiere el enunciado.
   */
   if ((e.altKey && e.key === 'F12') || (e.ctrlKey && e.key === 'b'))
      document.getElementById('imagen').style.backgroundImage = `url(${getRandomImage()})`;
});
