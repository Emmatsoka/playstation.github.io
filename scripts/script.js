
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

let temamod = localStorage.getItem("temamod");
if (temamod === 'vilagos') {
	document.body.classList.add("vilagos-tema");
	if (temamod === 'vilagos') {
		temavaltoikon.src = "./images/hold.png";
		pslogo.src = "./images/playblack.png";
	} else {
		document.body.classList.add("");
		temavaltoikon.src = "./images/nap.png";
		pslogo.src = "./images/playwhite.png";
	}
}

function temavaltas() {
	document.body.classList.toggle("vilagos-tema");
	if (document.body.classList.contains("vilagos-tema")) {
		temavaltoikon.src = "./images/hold.png";
		pslogo.src = "./images/playblack.png";
		tema = 'vilagos';
	} else {
		temavaltoikon.src = "./images/nap.png";
		pslogo.src = "./images/playwhite.png";
		tema = 'sotet';
	}

	// Mentjük a téma értékét a localStorage-ba
	localStorage.setItem("temamod", tema);
}