const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const homeLink = document.querySelector("#home-link"); 
const oldLink = document.querySelector("#old-link");
const newLink = document.querySelector("#new-link"); 
const smallLink = document.querySelector("#small-link"); 
const largeLink = document.querySelector("#large-link");
const mainHeading = document.querySelector("#main-heading")


const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      image:
      "images/aba-nigeria-temple-5087-main.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "images/Buenos_Aires_Argentina_Temple.jpeg"
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
  ];
function generateTempleFigures(templeData) {
    const mainGrid = document.querySelector('.main_grid');
    mainGrid.innerHTML = ''; // Clear existing content
    templeData.forEach(temple => {
        const card = document.createElement('div');
        card.setAttribute("id", "card");
        const title = document.createElement('h3');
        title.setAttribute("id", "title")
        title.innerHTML = ` <strong>${temple.templeName}</strong><br>`;
        const img = document.createElement('img');
        img.setAttribute("src", temple.image);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        const figcaption = document.createElement('figcaption');
        figcaption.className = 'caption';
        figcaption.innerHTML = `
            Location: ${temple.location}<br>
            Dedicated: ${temple.dedicated}<br>
            Area: ${temple.area} sq ft
        `;
        
        card.appendChild(title);
        card.appendChild(img);
        card.appendChild(figcaption);
        mainGrid.appendChild(card);
    });
}

generateTempleFigures(temples);


hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
    generateTempleFigures(temples);
})

homeLink.addEventListener('click', () => {
    mainHeading.textContent = "Home"
    generateTempleFigures(temples);
})
oldLink.addEventListener('click', () => {
    mainHeading.textContent = "Old"
    // const filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
    const oldTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 1900);

    generateTempleFigures(oldTemples);

})
newLink.addEventListener('click', () => {
    mainHeading.textContent = "New"
    const newTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
    generateTempleFigures(newTemples);
})
smallLink.addEventListener('click', () => {
    mainHeading.textContent = "Small"
    const smallTemples = temples.filter(temple => temple.area < 10000)
    generateTempleFigures(smallTemples);
})
largeLink.addEventListener('click', () => {
    mainHeading.textContent = "Large"
    const largeTemples = temples.filter(temple => temple.area > 90000)
    generateTempleFigures(largeTemples);
})
