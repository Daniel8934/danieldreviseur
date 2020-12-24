// Code JS pour l'effet typewritter sur la page index
var i = 0;
var txt = "Je n'offre pas mes services actuellement. Désolé!";
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// Code pour le lien vers la page contact.html
function contact() {
    window.open("contact.html");
}

// Code de la barre de navigation
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
