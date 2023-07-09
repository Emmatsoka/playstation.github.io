
var fadeElements = document.getElementsByClassName('scrollFade');

function scrollFade() {
	var viewportBottom = window.scrollY + window.innerHeight;

	for (var index = 0; index < fadeElements.length; index++) {
		var element = fadeElements[index];
		var rect = element.getBoundingClientRect();

		var elementFourth = rect.height/4;
		var fadeInPoint = window.innerHeight - elementFourth;
		var fadeOutPoint = -(rect.height/2);

		if (rect.top <= fadeInPoint) {
			element.classList.add('scrollFade--visible');
			element.classList.add('scrollFade--animate');
			element.classList.remove('scrollFade--hidden');
		} else {
			element.classList.remove('scrollFade--visible');
			element.classList.add('scrollFade--hidden');
		}

		if (rect.top <= fadeOutPoint) {
			element.classList.remove('scrollFade--visible');
			element.classList.add('scrollFade--hidden');
		}
	}
}


document.addEventListener('scroll', scrollFade);
window.addEventListener('resize', scrollFade);
document.addEventListener('DOMContentLoaded', function() {
    scrollFade();
});

var temavaltoikon = document.getElementById("temavalto");
var pslogo = document.getElementById('pslogo');
var tema;
var betoltologo = document.getElementById("betoltokep");
var fooldalkep = document.getElementById("fooldalkep");
var arajtkep = document.getElementById("arajtkep");
var tovabbiakkep = document.getElementById("tovabbiakkep");
var aprojektkep = document.getElementById("aprojektkep");
let temamod = localStorage.getItem("temamod");
if (temamod === 'vilagos') {
	document.body.classList.add("vilagos-tema");
	if (temamod === 'vilagos') {
		temavaltoikon.src = "./images/hold.png";
		pslogo.src = "./images/playblack.png";
		betoltologo.src = "./images/playblack.png";
		fooldalkep.src = "./images/fooldal.png";
		arajtkep.src = "./images/arajt.png";
		tovabbiakkep.src = "./images/tovabbiak.png";
		aprojektkep.src = "./images/aprojekt.png";

	} else {
		document.body.classList.add("");
		temavaltoikon.src = "./images/nap.png";
		pslogo.src = "./images/playwhite.png";
		betoltologo.src = "./images/playwhite.png";
		fooldalkep.src = "./images/fooldalvilagos.png";
		arajtkep.src = "./images/arajtvilagos.png";
		tovabbiakkep.src = "./images/tovabbiakvilagos.png";
		aprojektkep.src = "./images/aprojektvilagos.png";
	}
}

function temavaltas() {
	document.body.classList.toggle("vilagos-tema");
	if (document.body.classList.contains("vilagos-tema")) {
		temavaltoikon.src = "./images/hold.png";
		pslogo.src = "./images/playblack.png";
		betoltologo.src = "./images/playblack.png";
		fooldalkep.src = "./images/fooldal.png";
		arajtkep.src = "./images/arajt.png";
		tovabbiakkep.src = "./images/tovabbiak.png";
		aprojektkep.src = "./images/aprojekt.png";
		tema = 'vilagos';
	} else {
		temavaltoikon.src = "./images/nap.png";
		pslogo.src = "./images/playwhite.png";
		betoltologo.src = "./images/playwhite.png";
		fooldalkep.src = "./images/fooldalvilagos.png";
		arajtkep.src = "./images/arajtvilagos.png";
		tovabbiakkep.src = "./images/tovabbiakvilagos.png";
		aprojektkep.src = "./images/aprojektvilagos.png";
		tema = 'sotet';
	}

	// Mentjük a téma értékét a localStorage-ba
	localStorage.setItem("temamod", tema);
}

function betoltes(){
	myVar = setTimeout(oldalmutat, 600);
}


function oldalmutat() {
  var loader = document.getElementById("betolto");
  var egesz =   document.getElementById("egesz");
  loader.classList.add("eltunes");
  egesz.classList.add("aktiv");
document.body.style.overflow = "visible";
}

history.scrollRestoration = 'manual';

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

const navbar = document.getElementById("nav");

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
	navbar.classList.add('attunonav');
  } else {
	navbar.classList.remove('attunonav');
  }
});
