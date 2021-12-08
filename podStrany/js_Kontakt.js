window.onload = function() {myFunction3(),myFunction2()};	
window.onscroll = function() {myFunction()};

function openNav01() {
  document.getElementById("mySidenav").style.width = "100%";/*velikost menu*/
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}



var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function myFunction2(selectTag) {
  var listValue = selectTag.options[selectTag.selectedIndex].text;
  document.getElementById("kontakt01").style.fontSize = listValue;
  document.getElementById("otDoba").style.fontSize = listValue;
  document.getElementById("vedeni").style.fontSize = listValue;
  document.getElementById("vedeniNad").style.fontSize = listValue;
  document.getElementById("sec").style.fontSize = listValue;
  document.getElementById("oss01").style.fontSize = listValue;
  document.getElementById("oss02").style.fontSize = listValue;
  document.getElementById("oss03").style.fontSize = listValue;
  document.getElementById("oss04").style.fontSize = listValue;
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