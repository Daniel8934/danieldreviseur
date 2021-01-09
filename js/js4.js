
/*
// Code JS pour l'effet typewritter sur la page index française
var i = 0;
var txt = 'Je suis en congé d\'études. À bientôt!';
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
// Code JS pour l'effet typewritter sur la page index anglaise
var i = 0;
var txtEn = 'I am on study leave. See you soon!';
var speed = 50;

function typeWriter2() {
    if (i < txtEn.length) {
        document.getElementById("demo2").innerHTML += txtEn.charAt(i);
        i++;
        setTimeout(typeWriter2, speed);
    }
}
*/


// Code pour le lien vers la page contact.html
function contact() {
    window.open("contact.html");
}
// Code pour les liens vers les pages anglaises du site
function indexEn() {
    window.open("index-en.html");
}
function about() {
    window.open("about.html");
}
function servicesEn() {
    window.open("services-en.html");
}
function testimonials() {
    window.open("testimonials.html");
}
function contactEn() {
    window.open("contact-en.html");
}

// Code pour les liens vers les pages françaises du site
function index() {
    window.open("index.html");
}
function apropos() {
    window.open("a-propos.html");
}
function services() {
    window.open("services.html");
}
function temoignages() {
    window.open("temoignages.html");
}
function contactPageFr() {
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
