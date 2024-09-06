let currentSlide = 0;
const slides = document.querySelectorAll('.slides');
let slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    slide.style.display = (i === index) ? 'block' : 'none';
  });
  slides[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Pause on hover
document.getElementById('slider').addEventListener('mouseover', () => {
  clearInterval(slideInterval);
});

// Resume on hover out
document.getElementById('slider').addEventListener('mouseout', () => {
  slideInterval = setInterval(nextSlide, 3000);
});
