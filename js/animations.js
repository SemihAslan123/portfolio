document.addEventListener('DOMContentLoaded', () => {
    const cardsSection = document.querySelector('.cards-section');
    const cards = document.querySelectorAll('.card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                cards.forEach(card => {
                    card.classList.add('animate');
                });
                observer.unobserve(cardsSection); // Arrêter d'observer après l'animation
            }
        });
    }, {
        threshold: 0.2 // Déclencher quand 20% de la section est visible
    });

    observer.observe(cardsSection);
});