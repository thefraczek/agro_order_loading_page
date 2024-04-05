document.addEventListener('DOMContentLoaded', function() {
    // Tu można dodać kod JS, np. do obsługi formularza kontaktowego
});

document.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var imageSection = document.getElementById('image-section');

    var opacity = 1 - Math.max(0, Math.min(1, (scrollPosition / windowHeight) * 0.5));

    imageSection.style.opacity = opacity;
});
