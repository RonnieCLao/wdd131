document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  hamburger.addEventListener('click', function() {
      navMenu.classList.toggle('show');
      if (hamburger.innerHTML === "☰") {
          hamburger.innerHTML = "✖";
      } else {
          hamburger.innerHTML = "☰";
      }
  });
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
      templeName: "Sacramento California",
      location: "Sacramento, California",
      dedicated: "2006, September, 3",
      area: 19500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sacramento-california/400x250/sacramento-temple-766557-wallpaper.jpg"
    },
    {
      templeName: "Salt Lake",
      location: "Salt Lake City, Utah",
      dedicated: "1853, February, 14",
      area: 382207,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
    },
    {
      templeName: "Nauvoo Illinois",
      location: "Nauvoo, Illinois",
      dedicated: "2002, June, 27",
      area: 54000,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/nauvoo-illinois-temple/nauvoo-illinois-temple-49532.jpg"
    },
];

function displayTemples(templesDisplay) {
  templeGrid.innerHTML = '';
  templesDisplay.forEach(temple => {
      const templeCard = document.createElement('div');
      templeCard.classList.add('temple-card');

      const templeName = document.createElement('h3');
      templeName.textContent = temple.templeName;

      const templeLocation = document.createElement('p');
      templeLocation.textContent = `Location: ${temple.location}`;

      const templeDedication = document.createElement('p');
      templeDedication.textContent = `Dedicated: ${temple.dedicated}`;

      const templeArea = document.createElement('p');
      templeArea.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

      const templeImage = document.createElement('img');
      templeImage.src = temple.imageUrl;
      templeImage.alt = `${temple.templeName} - ${temple.location}`;
      templeImage.loading = 'lazy';

      templeCard.appendChild(templeImage);
      templeCard.appendChild(templeName);
      templeCard.appendChild(templeLocation);
      templeCard.appendChild(templeDedication);
      templeCard.appendChild(templeArea);
      templeGrid.appendChild(templeCard);
  });
}

displayTemples(temples);

document.querySelector('ul.navigation').addEventListener('click', function(e) {
  if (e.target.tagName === 'A') {
      e.preventDefault();
      const filter = e.target.textContent;
      let filteredTemples;
      switch (filter) {
          case 'Old':
              filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
              break;
          case 'New':
              filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
              break;
          case 'Large':
              filteredTemples = temples.filter(temple => temple.area > 90000);
              break;
          case 'Small':
              filteredTemples = temples.filter(temple => temple.area < 10000);
              break;
          case 'Home':
          default:
              filteredTemples = temples;
              break;
      }
      displayTemples(filteredTemples);
  }
});