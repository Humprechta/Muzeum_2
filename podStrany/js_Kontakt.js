window.onload = function() {myFunction3()};	

function openNav01() {
  document.getElementById("mySidenav").style.width = "100%";/*velikost menu*/
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

/*text k novinkam*/
var i = 0;
var txt = 'Probíhající text – K AKTUALITÁM NA MUZEU -  např. k úpravě otevírací doby atd. /NOVNKY';
var speed = 50;

function myFunction3() {
  if (i < txt.length) {
    document.getElementById("textNovinky").innerHTML += txt.charAt(i);
    i++;
    setTimeout(myFunction3, speed);
  }
}