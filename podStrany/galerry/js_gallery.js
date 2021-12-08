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
  document.getElementById("jedna").style.fontSize = listValue;
  document.getElementById("dva").style.fontSize = listValue;
  document.getElementById("tri").style.fontSize = listValue;
  document.getElementById("ctyri").style.fontSize = listValue;
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

/*GALLERY*/
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName("imgss");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

  for (var i = 0; i < img.length; i++) {
    img[i].onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
	}
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
document.getElementsByClassName("close")[0].style.zIndex = "13";

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}