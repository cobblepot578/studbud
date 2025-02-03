document.addEventListener("DOMContentLoaded", () => {
    console.log("Study Buddy site is ready!");

    const elementsToAnimate = document.querySelectorAll('.step, .animated-paragraph'); // Combine selectors

    window.addEventListener('scroll', () => {
        elementsToAnimate.forEach(element => {
            const rect = element.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            if (rect.top < viewportHeight * 0.8) {
                element.classList.add('animate');
            } else {
                element.classList.remove('animate');
            }
        });
    });
});
