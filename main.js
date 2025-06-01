document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.carrusel-slide');
    const prevButton = document.querySelector('.carrusel-button.prev');
    const nextButton = document.querySelector('.carrusel-button.next');
    let currentSlide = 0;

   
    slides.forEach(slide => slide.classList.remove('active'));

    if (slides.length > 0) {
        slides[0].classList.add('active');
    }

    function showSlide(index) {
        
        slides[currentSlide].classList.remove('active');
        
        
        currentSlide = index;
        if (currentSlide >= slides.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        
       
        slides[currentSlide].classList.add('active');
    }

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => showSlide(currentSlide - 1));
        nextButton.addEventListener('click', () => showSlide(currentSlide + 1));
    }
});