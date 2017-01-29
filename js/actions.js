/*  ACTIONS.JS */
// Decribe las acciones generales del sitio.

/* PARA animar al aparecer en pantalla */
didScroll= true;
$(function(){
    $(".anims.on").removeClass("on");
    window.scrollTo(0,0);
    detectaAnims();
    $(window).scroll(function() { didScroll = true; }); 
});

function detectaAnims(){
  var detector = setInterval(function() {
    if ( didScroll ) {
      didScroll = false;
      $(".anims").each(function(i,e){
        if( esVisible(e) ){ $(e).addClass("on"); }
      });

      if( $(".anims.on").length >= $(".anims").length ){ //Cuando hayan entrado todos los elementos, se apaga
        clearInterval( detector );
      }
    }
  }, 250);  
};

function esVisible (el) {
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && 
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
    );
}

/* PARA REDUCIR EL HEADER AL SCROLL */
$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('encoge');
  } else {
    $('nav').removeClass('encoge');
  }
});

/* Randomizador de arrays (Algoritmo Fisher-Yates)*/
function shuffle(arr) {
  var cI = arr.length, tempV, rdmI;
  while (0 !== cI) {
    rdmI = Math.floor(Math.random() * cI);
    cI -= 1;
    tempV = arr[cI];
    arr[cI] = arr[rdmI];
    arr[rdmI] = tempV;
  }
  return arr;
}

/* Generador de numeros aleatorios en cierto rango */
function numRnd(menor,mayor){
	numP = mayor - menor; 
	rnd = Math.random() * numP;
	rnd = Math.round(rnd);
	return parseInt(menor) + rnd;
}