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


// ===== CV Menu (hover + click hybrid control) =====
const cvMenu = document.getElementById('cvMenu');
const cvToggle = document.getElementById('cvToggle');
const cvDropdown = document.getElementById('cvDropdown');

let dropdownVisible = false;

cvToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  dropdownVisible = !dropdownVisible;
  cvDropdown.classList.toggle('active', dropdownVisible);
});

// Ferme le menu si on clique ailleurs
document.addEventListener('click', (e) => {
  if (!cvMenu.contains(e.target)) {
    cvDropdown.classList.remove('active');
    dropdownVisible = false;
  }
});


