const accordions = document.querySelectorAll('.accordion-header');

accordions.forEach(accordion => {
    accordion.addEventListener('click', function() {
        this.classList.toggle('active');
        const content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});