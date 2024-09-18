// Tableau contenant les données des slides : image et texte (tagLine)
const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

// Sélection du conteneur des bullet points
const dotsContainer = document.querySelector('.dots');

// Initialisation de l'index de la slide actuelle à 0 (la première slide)
let currentIndex = 0;

// Boucle sur chaque slide pour créer et configurer les bullet points
slides.forEach((slide, index) => {
    // Crée un nouvel élément <div> pour chaque bullet point
    const dot = document.createElement('div');
    // Ajoute la classe 'dot' pour le styliser
    dot.classList.add('dot');
    
    // Si c'est le premier bullet point (index 0), ajoute une classe spécifique pour le mettre en surbrillance
    if (index === 0) {
        dot.classList.add('dot_selected');
    }

    // Ajoute un event listener sur chaque bullet point pour gérer le clic
    dot.addEventListener('click', () => {
        // Met à jour l'index actuel avec l'index du bullet point cliqué
        currentIndex = index;
        // Met à jour le carrousel pour afficher la slide correspondant au bullet point cliqué
        updateCarousel(currentIndex);
    });

    // Ajoute le bullet point au conteneur des bullet points dans le DOM
    dotsContainer.appendChild(dot);
});

// Fonction pour mettre à jour l'image, le texte et les bullet points du carrousel
function updateCarousel(index) {
    // Sélectionne l'élément image du carrousel
    const bannerImg = document.querySelector('.banner-img');
    // Met à jour l'attribut 'src' de l'image pour afficher la nouvelle image
    bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;

    // Sélectionne l'élément texte du carrousel
    const bannerText = document.querySelector('#banner p');
    // Met à jour le contenu HTML du texte pour afficher la nouvelle tagLine
    bannerText.innerHTML = slides[index].tagLine;

    // Sélectionne tous les bullet points et les met à jour
    document.querySelectorAll('.dot').forEach((dot, idx) => {
        // Ajoute ou retire la classe 'dot_selected' pour indiquer le bullet point actif
        dot.classList.toggle('dot_selected', idx === index);
    });
}

// Sélection des flèches de navigation
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');

// Ajoute un event listener à la flèche gauche
leftArrow.addEventListener('click', () => {
    // Décrémente l'index actuel et utilise le modulo pour créer un défilement infini
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    // Met à jour le carrousel pour afficher la slide précédente
    updateCarousel(currentIndex);
});

// Ajoute un event listener à la flèche droite
rightArrow.addEventListener('click', () => {
    // Incrémente l'index actuel et utilise le modulo pour créer un défilement infini
    currentIndex = (currentIndex + 1) % slides.length;
    // Met à jour le carrousel pour afficher la slide suivante
    updateCarousel(currentIndex);
});
