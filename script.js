document.addEventListener('DOMContentLoaded', function() {
    // Tu można dodać kod JS, np. do obsługi formularza kontaktowego
});

document.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var imageSection = document.getElementById('image-section');
    imageSection.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});
