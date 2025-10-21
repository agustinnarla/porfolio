// Simple carousel + lightbox initializer

function initProjectCards() {
  const galleries = document.querySelectorAll('.project-card-gallery');
  galleries.forEach((gallery) => {
    const overlay = document.querySelector('.overlay');
    const overlayImg = overlay?.querySelector('.overlay-img');
    const overlayClose = overlay?.querySelector('.overlay-close');

    // Click on any image to open overlay
    gallery.querySelectorAll('img').forEach((img) => {
      img.addEventListener('click', (e) => {
        if (!overlay || !overlayImg) return;
        overlayImg.src = img.src;
        overlay.classList.remove('hidden');
        overlay.classList.add('flex');
      });
    });

    // Close overlay
    overlayClose?.addEventListener('click', () => {
      overlay.classList.add('hidden');
      overlay.classList.remove('flex');
      if (overlayImg) overlayImg.src = '';
    });

    // Close on click outside image
    overlay?.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.add('hidden');
        overlay.classList.remove('flex');
        if (overlayImg) overlayImg.src = '';
      }
    });
  });
}

if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', initProjectCards);
}
