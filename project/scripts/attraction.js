document.addEventListener("DOMContentLoaded", function() {
    var currentYear = new Date().getFullYear();
    var content = 	"\u00A9" + currentYear + " Ronnie Lao"
    document.getElementById("year").textContent = content;

    var lastModified = new Date(document.lastModified);
    var formattedDate = lastModified.toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric', hour: "2-digit", minute: "2-digit", second: "numeric"});
    document.getElementById("lastmodified").textContent = "Last Modified: " + formattedDate;
});


const attractionsData = [
    {
      title: "Frank & Son Collectibles",
      description: "A massive marketplace for all things collectible!",
      image: "images/frank-front.webp",
      details: "Located in City of Industry, this is a haven for collectible enthusiasts. It is 30 minutes away from Anaheim and is perfect for fans of comics, anime, and all things collectible.",
      expanded: false 
    },
    {
      title: "626 Night Market",
      description: "A vibrant night market with food and entertainment!",
      image: "images/626-nite-market-2.webp",
      details: "Summer months only! Located in Arcadia. A 45 minute drive from Anaheim. This summer night market is an absolute must see with food stalls of all kinds and live music that give this market a festive, must visit atmosphere.",
      expanded: false
    },
    {
      title: "The Source",
      description: "A shopping center packed with vendors and cultural influence from the local korean populous.",
      image: "images/the-source-sky.webp",
      details: "Located 10 minutes away from Anaheim in Buena Park, this korean influenced shopping mall is a convenient visit. With plenty of available parking and a movie theater located in the shopping center. This Korean influenced shopping mall will leave you with surprises and interesting finds.",
      expanded: false
    },
  ];
  

  function createAttractionElement(attraction) {
    const attractionHTML = `
      <div class="attraction">
        <h3>${attraction.title}</h3>
        <p>${attraction.description}</p>
        <img src="${attraction.image}" alt="${attraction.title}">
        <button class="details-button" data-attraction-id="${attractionsData.indexOf(attraction)}">Details</button>
        <div class="details" style="display: ${attraction.expanded ? 'block' : 'none'};">
          <p>${attraction.details}</p>
        </div>
      </div>
    `;
    return attractionHTML;
  }
  
  function renderAttractions() {
    const attractionsContainer = document.getElementById('attractions-container'); 
    attractionsContainer.innerHTML = '';
  
    attractionsData.forEach(attraction => {
      attractionsContainer.innerHTML += createAttractionElement(attraction);
    });
  
    const detailsButtons = document.querySelectorAll('.details-button');
    detailsButtons.forEach(button => {
        button.addEventListener('click', toggleAttractionDetails);
    });
  }
  
  function toggleAttractionDetails(event) {
      const attractionId = parseInt(event.target.dataset.attractionId, 10);
      attractionsData[attractionId].expanded = !attractionsData[attractionId].expanded;
      renderAttractions();
  }
  
  renderAttractions();

  function saveAttractionsToLocalStorage() {
    localStorage.setItem('attractionsData', JSON.stringify(attractionsData));
  }
  
  function loadAttractionsFromLocalStorage() {
    const storedData = localStorage.getItem('attractionsData');
    if (storedData) {
      attractionsData = JSON.parse(storedData);
    }
  }
  
  loadAttractionsFromLocalStorage(); 
  window.addEventListener('beforeunload', saveAttractionsToLocalStorage);
  
  