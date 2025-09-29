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
      image:
      "images/manti_temple.webp"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      image:
      "images/payson_utah_temple.webp"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      image:
      "images/yigo_guam_temple.jpeg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      image:
      "images/dc_temple.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      image:
      "images/lima_peru_temple.jpeg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      image:
      "images/mexico_city_mexico_temple.jpeg"
    },

    {
      templeName: "Kirkland Ohio",
      location: "Kirkland, Ohio, United States",
      dedicated: "1836, March, 27",
      area: 15000,
      image:
      "images/kirkland_temple.jpeg"
    },
    {
      templeName: "Ogden Utah",
      location: "Ogden, Utah, United States",
      dedicated: "1972, January, 18",
      area: 112232,
      image:
      "images/ogden_temple.jpg"
    },
    {
      templeName: "Rome Italy",
      location: "Rome Italy",
      dedicated: "2019, March, 10",
      area: 41010,
      image:
      "images/rome-temple.jpg"
    },

    {
      templeName: "Salt Lake",
      location: "Salt Lake City, Utah, United States",
      dedicated: "1893, April, 6",
      area: 382207,
      image:
      "images/salt-lake-temple.jpeg"
    },
    {
      templeName: "Buenos Aires",
      location: "Buenos Aires",
      dedicated: "1986, January, 17",
      area: 30659,
      image:
      "images/buenos-aires-temple.jpg"
    }
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
    const oldTemples = temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) < 1900);

    generateTempleFigures(oldTemples);

})
newLink.addEventListener('click', () => {
    mainHeading.textContent = "New"
    const newTemples = temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) > 2000);

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
