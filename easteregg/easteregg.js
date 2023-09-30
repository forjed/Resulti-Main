// Fonction qui déclenche l'easter egg
function startEasterEgg() {
  // Récupération de l'élément image
  var img = document.getElementById("my-img");
  
  // Ajout d'une classe pour faire tourner l'image
  img.classList.add("rotate");
  
  // Création de l'élément audio
  var audio = new Audio("https://advancedspottedoperation.jinternet.repl.co/Lipps%20Inc.%20-%20Funkytown%20(1980).mp3");
  
  // Lecture de la musique
  audio.play();
}

// Ajout d'un écouteur d'événements sur la soumission du formulaire
document.getElementById("standard").addEventListener("submit", function(event) {
  // Récupération de la valeur de la barre de recherche
  var searchQuery = document.getElementById("search-bar").value;
  
  // Vérification de la chaîne de recherche pour déclencher l'easter egg
  if (searchQuery.toLowerCase() === "go go go") {
    startEasterEgg();
    event.preventDefault();
  }
});

// Fonction qui déclenche l'easter egg
function startEasterEgg() {
  // Récupération de l'élément image
  var img = document.getElementById("my-img");
  
  // Ajout d'une classe pour faire tourner l'image
  img.classList.add("rotate");
  
  // Création de l'élément audio
  var audio = new Audio("https://feistylightcoralconnection.jinternet.repl.co/bruh.mp3");
  
  // Lecture de la musique
  audio.play();
}

// Ajout d'un écouteur d'événements sur la soumission du formulaire
document.getElementById("standard").addEventListener("submit", function(event) {
  // Récupération de la valeur de la barre de recherche
  var searchQuery = document.getElementById("search-bar").value;
  
  // Vérification de la chaîne de recherche pour déclencher l'easter egg
  if (searchQuery.toLowerCase() === "bruh") {
    startEasterEgg();
    event.preventDefault();
  }
});

// Fonction qui déclenche l'easter egg
function startEasterEgg() {
  // Récupération de l'élément image
  var img = document.getElementById("my-img");
  
  // Ajout d'une classe pour faire tourner l'image
  img.classList.add("rotate");
  
  // Création de l'élément audio
  var audio = new Audio("https://feistylightcoralconnection.jinternet.repl.co/music.mp3");
  
  // Lecture de la musique
  audio.play();
}

// Ajout d'un écouteur d'événements sur la soumission du formulaire
document.getElementById("standard").addEventListener("submit", function(event) {
  // Récupération de la valeur de la barre de recherche
  var searchQuery = document.getElementById("search-bar").value;
  
  // Vérification de la chaîne de recherche pour déclencher l'easter egg
  if (searchQuery.toLowerCase() === "life could be a dream, life could be a dream") {
    startEasterEgg();
    event.preventDefault();
  }
});