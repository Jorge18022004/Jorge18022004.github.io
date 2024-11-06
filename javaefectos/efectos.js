let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;

        function moveSlide(direction) {
            currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
            document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        window.onscroll = function() {
            let logo = document.getElementById("logo");
            if (window.scrollY > 50) {
                logo.style.top = "0";
            } else {
                logo.style.top = "10px";
            }
        };

        let slideIndex = 0;

function moveSlide(n) {
    const slides = document.querySelectorAll('.slide');  // Selecciona todas las diapositivas
    const totalSlides = slides.length;  // Obtiene el número total de diapositivas

    // Cambiar el índice de la diapositiva
    slideIndex += n;

    // Si el índice de la diapositiva es mayor que el número total de diapositivas, vuelve al principio
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }

    // Si el índice de la diapositiva es menor que 0, va a la última diapositiva
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }

    // Mueve el carrusel a la diapositiva correcta
    document.querySelector('.slides').style.transform = `translateX(-${slideIndex * 100}%)`;
}
