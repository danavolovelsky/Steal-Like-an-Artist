// Smooth Scrolling (Enhanced with Header Offset)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const headerOffset = document.querySelector('header').offsetHeight;
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 20; // Additional offset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Close the mobile menu if open
            if(document.querySelector('.nav-links').classList.contains('nav-active')){
                toggleHamburger();
            }
        }
    });
});

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', toggleHamburger);

function toggleHamburger() {
    hamburger.classList.toggle('toggle');
    navLinks.classList.toggle('nav-active');
}

document.addEventListener("DOMContentLoaded", function() {
    const carouselWrapper = document.querySelector(".carousel-wrapper");
    const images = carouselWrapper.querySelectorAll("img");
    const totalImages = images.length;
    let index = 0;

    function updateCarousel() {
        // Slide left by index * 300
        const translateX = -index * 300; 
        carouselWrapper.style.transform = `translateX(${translateX}px)`;
    }

    function moveCarousel(direction) {
        index += direction;
        if (index < 0) {
            index = totalImages - 1;
        } else if (index >= totalImages) {
            index = 0;
        }
        updateCarousel();
    }

    // Create and append navigation controls with arrows
    const prevButton = document.createElement("button");
    prevButton.innerHTML = "&#8592;"; // Left arrow
    prevButton.className = "carousel-button prev";
    prevButton.onclick = () => moveCarousel(-1);

    const nextButton = document.createElement("button");
    nextButton.innerHTML = "&#8594;"; // Right arrow
    nextButton.className = "carousel-button next";
    nextButton.onclick = () => moveCarousel(1);

    const controls = document.createElement("div");
    controls.className = "carousel-controls";
    controls.appendChild(prevButton);
    controls.appendChild(nextButton);

    // Add controls to the carousel
    const carouselOuter = document.querySelector(".carousel-outer");
    carouselOuter.appendChild(controls);
        updateCarousel(); // Start at first image
});


    
