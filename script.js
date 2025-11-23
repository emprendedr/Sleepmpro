const carousel = document.querySelector('.testimonial-carousel');
let scrollAmount = 0;

function autoScroll() {
    if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
        scrollAmount = 0;
        carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    } else {
        scrollAmount += 310; // ancho de tarjeta + gap
        carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
}

setInterval(autoScroll, 4000); // cambia cada 4 segundos
