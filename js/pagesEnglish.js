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