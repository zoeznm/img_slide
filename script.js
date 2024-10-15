const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

document.getElementById('next').addEventListener('click', () => {
  slides[currentIndex].style.display = 'none';
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].style.display = 'block';
});

document.getElementById('prev').addEventListener('click', () => {
  slides[currentIndex].style.display = 'none';
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  slides[currentIndex].style.display = 'block';
});