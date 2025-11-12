// Animation en fondu au scroll
const cards = document.querySelectorAll('.card');

function checkVisibility() {
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add('visible');
    }
  });
}


window.addEventListener('scroll', checkVisibility);
checkVisibility();

// Lightbox (zoom plein écran)
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');

document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.style.display = 'flex';
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});



// ===== CV Menu Toggle (click-based, stable) =====
const cvToggle = document.getElementById('cvToggle');
const cvDropdown = document.getElementById('cvDropdown');

cvToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  cvDropdown.classList.toggle('active');
});

// Ferme le menu si on clique ailleurs
document.addEventListener('click', (e) => {
  if (!cvDropdown.contains(e.target) && e.target !== cvToggle) {
    cvDropdown.classList.remove('active');
  }
});


