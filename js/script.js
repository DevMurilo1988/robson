document.addEventListener('DOMContentLoaded', () => {
    const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    const totalImages = images.length;
    let currentIndex = 0;
    let interval;

    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');

    function showImage(index) {
        // Ensure the index is within the valid range
        if (index < 0) {
            index = totalImages - 1;
        } else if (index >= totalImages) {
            index = 0;
        }
        currentIndex = index;
        carouselImages.style.transition = 'transform 1s ease';
        carouselImages.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextImage() {
        showImage(currentIndex + 1);
    }

    function prevImage() {
        showImage(currentIndex - 1);
    }

    nextButton.addEventListener('click', () => {
        clearInterval(interval);
        nextImage();
        startCarousel();
    });

    prevButton.addEventListener('click', () => {
        clearInterval(interval);
        prevImage();
        startCarousel();
    });

    function startCarousel() {
        interval = setInterval(() => {
            nextImage();
        }, 10000); // 10 segundos por imagem
    }

    startCarousel();
});
