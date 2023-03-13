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

// Etape 1 : récupérer toutes les images depuis le frontend
const images = document.querySelectorAll("#images img");

// Etape 2 : savoir sur quelle image on a cliqué
images.forEach((image) => {
	image.addEventListener("click", (e) => {
		// Etape 3 : mettre à jour l'image dans la section #result avec l'image sélectionnée précédemment
		const result = document.querySelector("#result img");
		result.src = e.target.src;
	});
});

// Etape 4 : sélectionner le textarea
const textarea = document.querySelector("#message");

// Etape 5 : ajouter un écouteur d'événement sur le textarea (keyup)
textarea.addEventListener("keyup", (e) => {
	const result = document.querySelector("#result p");
	// Etape 6 : mettre à jour le texte dans la section #result avec le texte du textarea
	result.innerHTML = e.target.value;
});

// Etape 7 : sélectionner le bouton des couleurs
const colors = document.querySelector("#color");

// Etape 8 : ajouter un écouteur d'événement sur le bouton des couleurs (input / change)
colors.addEventListener("input", (e) => {
	// Etape 9 : mettre à jour la couleur du texte dans la section #result avec la couleur du bouton sélectionné précédemment
	const result = document.querySelector("#result p");
	result.style.color = e.target.value;
});
