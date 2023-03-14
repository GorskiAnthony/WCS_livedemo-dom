/**
 *
 * Etape 1 : récupérer toutes les images depuis le frontend
 * Etape 2 : savoir sur quelle image on a cliqué
 * Etape 3 : mettre à jour l'image dans la section #result avec l'image sélectionnée précédemment
 * Etape 4 : sélectionner le textarea
 * Etape 5 : ajouter un écouteur d'événement sur le textarea (keyup)
 * Etape 6 : mettre à jour le texte dans la section #result avec le texte du textarea
 * Etape 7 : sélectionner le bouton des couleurs
 * Etape 8 : ajouter un écouteur d'événement sur le bouton des couleurs (input / change)
 * Etape 9 : mettre à jour la couleur du texte dans la section #result avec la couleur du bouton sélectionné précédemment
 *
 */

// JS Wizards

// Etape 1 : récupérer toutes les images depuis le frontend ✅
const pictures = document.querySelectorAll("#images img");
// console.log(pictures);

for (let i = 0; i < pictures.length; i++) {
	//  Etape 2 : savoir sur quelle image on a cliqué ✅
	pictures[i].addEventListener("click", function (event) {
		// Etape 3 : mettre à jour l'image dans la section #result avec l'image sélectionnée précédemment ✅
		const mainPic = document.querySelector("#result img");
		// console.log(event);
		// console.log(event.target);
		// console.log(event.target.src);
		mainPic.src = event.target.src;
		mainPic.alt = event.target.alt;
	});
}

// Etape 4 : sélectionner le textarea ✅
//const textarea = document.querySelector("#messages textarea");
const textArea = document.querySelector("#message");
// "#message" avec le s c'est la div sans le s c'est direct le textarea
//  Etape 6 : mettre à jour le texte dans la section #result avec le texte du textarea ✅
//console.log(event.target.value);
const p = document.getElementsByTagName("p")[0];

//  Etape 5 : ajouter un écouteur d'événement sur le textarea (keyup) ✅
textArea.addEventListener("keyup", function (event) {
	// console.log(p);
	p.innerHTML = event.target.value;
});

// Etape 7 : sélectionner le bouton des couleurs ✅
const color = document.querySelector("#color");

// Etape 8 : ajouter un écouteur d'événement sur le bouton des couleurs (input / change) ✅

color.addEventListener("input", function (event) {
	// Etape 9 : mettre à jour la couleur du texte dans la section #result avec la couleur du bouton sélectionné précédemment
	// console.log(event.target.value);

	p.style.color = event.target.value;
});
