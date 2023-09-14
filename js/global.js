/* Menu mobile */

// Cette fonction gère le comportement du menu mobile
function menuMobile() {
  const btn = document.querySelector('.burger'); // Sélectionne le bouton du menu
  const header = document.querySelector('.header'); // Sélectionne l'en-tête du site
  const links = document.querySelectorAll('.navbar a'); // Sélectionne tous les liens du menu
  
  // Ajoute un écouteur d'événement au clic sur le bouton du menu
  btn.addEventListener('click', () => {
  header.classList.toggle('show-nav'); // Ajoute ou supprime la classe 'show-nav' à l'en-tête pour afficher ou masquer le menu
  });
  
  // Parcourt tous les liens du menu et ajoute un écouteur d'événement au clic sur chaque lien
  links.forEach(link => {
  link.addEventListener('click', () => {
  header.classList.remove('show-nav'); // Masque le menu en supprimant la classe 'show-nav' de l'en-tête
  });
  });
  }
  menuMobile(); // Appelle la fonction pour activer le menu mobile
  
// Effets

// Cette fonction utilise l'observateur d'intersection pour animer les sections et les compétences lorsqu'ils deviennent visibles dans la fenêtre
const observerIntersectionAnimation = () => {
const sections = document.querySelectorAll('section'); // Sélectionne toutes les sections du site
const skills = document.querySelectorAll('.skills .bar'); // Sélectionne toutes les barres de compétences

// Parcourt toutes les sections et applique une animation de disparition en réglant l'opacité à 0 avec une transition
sections.forEach((section, index) => {
if (index === 0) return; // Ignore la première section
section.style.opacity = "0";
section.style.transition = "all 1.6s";
});

// Parcourt toutes les barres de compétences et réduit leur largeur à 0 avec une transition
skills.forEach((elem, index) => {
elem.style.width = "0";
elem.style.transition = "all 1.6s";
});

// Crée un observateur d'intersection pour les sections visibles
let sectionObserver = new IntersectionObserver(function (entries, observer) {
entries.forEach(entry => {
if (entry.isIntersecting) {
let elem = entry.target;
elem.style.opacity = 1; // Rétablit l'opacité de la section à 1 pour l'animer en réapparition
}
});
});

// Observe chaque section pour détecter leur intersection avec la fenêtre
sections.forEach(section => {
sectionObserver.observe(section);
});


// Crée un observateur d'intersection pour les compétences visibles
let skillsObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      let elem = entry.target;
      let width = elem.getAttribute('data-width');
      elem.style.width = width + '%'; // Applique la largeur spécifiée
      ; // Rétablit la largeur de la barre de compétences à sa valeur d'origine pour l'animer en expansion

    }
  });
});


// Observe chaque barre de compétences pour détecter leur intersection avec la fenêtre
skills.forEach(skill => {
skillsObserver.observe(skill);
});
}

observerIntersectionAnimation(); // Appelle la fonction pour


/*
La fonction menuMobile() gère le comportement du menu mobile en ajoutant ou supprimant la classe "show-nav" à l'en-tête lors du clic sur le bouton du menu, et en masquant le menu lorsque l'on clique sur un lien.

La fonction observerIntersectionAnimation() utilise l'observateur d'intersection pour animer les sections et les compétences lorsqu'ils deviennent visibles à l'écran. Elle applique des animations de transition en réglant l'opacité des sections et la largeur des barres de compétences.
*/