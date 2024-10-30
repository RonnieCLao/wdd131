document.addEventListener("DOMContentLoaded", function() {
    var currentYear = new Date().getFullYear();
    var content = 	"\u00A9" + currentYear + " Ronnie Lao"
    document.getElementById("year").textContent = content;

    var lastModified = new Date(document.lastModified);
    var formattedDate = lastModified.toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric', hour: "2-digit", minute: "2-digit", second: "numeric"});
    document.getElementById("lastmodified").textContent = "Last Modified: " + formattedDate;
});

const images = document.querySelectorAll('.slideshow-att img'); 
let currentIndex = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.style.display = i === index ? 'block' : 'none';
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function previousImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

showImage(currentIndex);

const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');

nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', previousImage);

setInterval(nextImage, 3000);
