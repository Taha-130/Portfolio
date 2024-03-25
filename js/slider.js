let slideIndex = { 'realiser': 0, 'optimiser': 0, 'administrer': 0, 'gerer': 0, 'conduire': 0, 'collaborer': 0 };

function showSlider(competency) {
  // Cachez tous les sliders et réinitialisez la couleur de fond des boutons
  document.querySelectorAll('.slider-container').forEach(container => {
    container.style.display = 'none';
  });
  document.querySelectorAll('.arrow-segment').forEach(segment => {
    segment.classList.remove('active');
  });

  // Affichez le slider correspondant et mettez en évidence le bouton de la compétence
  const slider = document.getElementById(`${competency}Slider`);
  slider.style.display = 'block';
  document.querySelector(`.arrow-segment.${competency}`).classList.add('active');

  // Mettez à jour le carrousel pour la compétence sélectionnée
  updateSlider(competency);
}

function navigateSlider(competency, n) {
  const numSlides = document.querySelectorAll(`#${competency}Slider .project-card`).length;
  slideIndex[competency] = (numSlides + slideIndex[competency] + n) % numSlides;
  updateSlider(competency);
}

function updateSlider(competency) {
  let slides = document.querySelectorAll(`#${competency}Slider .project-card`);
  slides.forEach(slide => {
    slide.style.display = 'none';
  });
  slides[slideIndex[competency]].style.display = 'block';
}

// Initialisez la première compétence affichée
showSlider('realiser');

// Ajoutez la fonctionnalité pour naviguer le slider avec les flèches gauche et droite du clavier
document.addEventListener('keydown', function(event) {
    const activeCompetency = document.querySelector('.arrow-segment.active').classList[1];
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      const direction = (event.key === 'ArrowLeft') ? -1 : 1;
      navigateSlider(activeCompetency, direction);
    }
  });


