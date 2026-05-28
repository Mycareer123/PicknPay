const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let counter = 0;

// Manual Next
nextBtn.addEventListener('click', () => {
counter++;
if (counter >= images.length) counter = 0;
slide.style.transform = `translateX(${-counter * 100}%)`;
});

// Manual Previous
prevBtn.addEventListener('click', () => {
counter--;
if (counter < 0) counter = images.length - 1;
slide.style.transform = `translateX(${-counter * 100}%)`;
});

// Auto Slide (every 5 seconds)
setInterval(() => {
counter++;
if (counter >= images.length) counter = 0;
slide.style.transform = `translateX(${-counter * 100}%)`;
}, 5000);
