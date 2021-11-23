/*script na sticky menu*/

window.onscroll = function() {myFunction()};
window.onload = function() {myFunction2()};
window.onload = function() {myFunction3()}


var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

/*slider*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

/*upozornení*/
	function myFunction2(){
	document.getElementById("Upozornění").style.width = "100%";
	}
	function closeNavU() {
		var myobj = document.getElementById("Upozornění");
myobj.remove();

}
/*side menu*/
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
/**/
