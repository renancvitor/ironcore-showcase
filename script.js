// Progressive enhancement: all captures and PNG links work without JavaScript.
document.querySelectorAll('[data-gallery]').forEach((gallery) => {
  const slides = [...gallery.querySelectorAll('.capture')];
  const controls = gallery.querySelector('.gallery-controls');
  const status = gallery.querySelector('.gallery-status');
  let current = 0;
  function show(index) {
    const focusWasOnImage = slides.some(slide => slide.contains(document.activeElement));
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => { slide.hidden = i !== current; });
    status.textContent = String(current + 1).padStart(2, '0') + ' / ' + String(slides.length).padStart(2, '0');
    if (focusWasOnImage) slides[current].querySelector('[data-image]').focus({ preventScroll: true });
  }
  gallery.classList.add('is-enhanced');
  controls.hidden = false;
  gallery.querySelector('[data-prev]').addEventListener('click', () => show(current - 1));
  gallery.querySelector('[data-next]').addEventListener('click', () => show(current + 1));
  gallery.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      show(current + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
  show(0);
});

const dialog = document.querySelector('#lightbox');
const imageLinks = [...document.querySelectorAll('[data-image]')];
if (typeof dialog.showModal === 'function') {
  const imageHost = dialog.querySelector('.lightbox-image');
  const caption = dialog.querySelector('[data-lightbox-caption]');
  const original = dialog.querySelector('[data-original]');
  let activeIndex = 0;
  let opener;
  function display(index) {
    activeIndex = (index + imageLinks.length) % imageLinks.length;
    const link = imageLinks[activeIndex];
    const source = link.querySelector('img');
    const image = source.cloneNode();
    image.loading = 'eager';
    image.removeAttribute('fetchpriority');
    imageHost.replaceChildren(image);
    caption.textContent = (activeIndex + 1) + ' / ' + imageLinks.length + ' — ' + link.closest('figure').querySelector('figcaption span').textContent;
    original.href = link.href;
  }
  imageLinks.forEach((link, index) => {
    link.addEventListener('click', (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = link;
      display(index);
      dialog.showModal();
      document.body.classList.add('modal-open');
    });
  });
  dialog.querySelector('[data-close]').addEventListener('click', () => dialog.close());
  dialog.querySelector('[data-lightbox-prev]').addEventListener('click', () => display(activeIndex - 1));
  dialog.querySelector('[data-lightbox-next]').addEventListener('click', () => display(activeIndex + 1));
  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      display(activeIndex + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
  dialog.addEventListener('click', (event) => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    opener?.focus({ preventScroll: true });
  });
}
