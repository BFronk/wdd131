const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const homeLink = document.querySelector("#home-link"); 
const oldLink = document.querySelector("#old-link");
const newLink = document.querySelector("#new-link"); 
const smallLink = document.querySelector("#small-link"); 
const largeLink = document.querySelector("#large-link");
const mainHeading = document.querySelector("#main-heading")
// const main = document.querySelector
// const temples = [
//     {
//         templeName: "Salt Lake City, Utah",
//         locale: "Salt Lake City", 
//         dedicated: "April 6, 1893",
//         area:382207 
//     },
//     {
//         templeName: "Ogden Utah",
//         locale: "Ogden Utah",
//         dedicated: "January 18, 1972",
//         area: 112232
//     },
//     {
//         templeName: "Rome Italy",
//         locale: "Rome Italy",
//         dedicated: "",
//         area:41010 
//     },
//     {
//         templeName: "Buenos Aaries, Argentina",
//         locale: "Buenos Aaries, Argentina",
//         dedicated: "January 17, 1986",
//         area:30659
//     },
//     {
//         templeName: "Mesa Arizona",
//         locale: "Mesa Arizona",
//         dedicated: "October 23, 1927",
//         area:113916
//     },
//     {
//         templeName: "Tokyo Japan",
//         locale: "Tokyo Japan",
//         dedicated: "27–29, 1980",
//         area:52590
//     },
//     {
//         templeName: "Fort Lauderdale",
//         locale: "Fort Lauderdale",
//         dedicated: "May 4, 2014",
//         area:30500
//     },
//     {
//         templeName: "Albequerque New Mexico",
//         locale: "Albequerque New Mexico",
//         dedicated: "March 5, 2000",
//         area:34245
//     },
//     {
//         templeName: "Curitiba Brazil",
//         locale: "Curitiba Brazil",
//         dedicated: "June 1, 2008",
//         area:27850
//     },
//     {
//         templeName: "Houston Texas",
//         locale: "Spring Texas",
//         dedicated: "26 August 2000",
//         area:0
//     },
//     {
//         templeName: "Idaho falls",
//         locale: "Idaho falls Idaho",
//         dedicated: "23 September 1945",
//         area: 92177
//     },
//     {
//         templeName: "Las Vegas",
//         locale: "Las Vegas, Nevada",
//         dedicated: "16 December 1989",
//         area:80350
//     },
// ];

// temples
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
      templeName: "Manila Philippines",
      location: "Quezon City, Philippines",
      dedicated: "1984, September, 25-27",
      area: 152460,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/_temp/029-Manila-Philippines-Temple.jpg"
    },
    {
      templeName: "Sapporo Japan",
      location: "Sapporo, Japan",
      dedicated: "2016, August, 21",
      area: 426888,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/sapporo-japan-temple/sapporo-japan-temple-3374-main.jpg"
    },
    {
      templeName: "Tokyo Japan",
      location: "Tokyo, Japan",
      dedicated: "1980, October, 27-29",
      area: 53143,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
    }
    // Add more temple objects here...
  ];
// function buildTempleCards(templesArray=temples){
//     const cardsContainer = document.querySelector('.cards-container');
//     cardsContainer.innerHTML = "";
//     templesArray.forEach(temple => {
//         const templeCards =`<section class="cards">
//                 <h3 class="temple-name">${temple.templeName}</h3>
//                 <div class="temple-info">
//                     <div class="detail_con">
//                       <span class="label">Location:</span>
//                       <span class="data">${temple.location}</span> 
//                     </div>
//                     <div class="detail_con">
//                       <span class="label">Dedicated:</span>
//                       <span class="data">${temple.dedicated}</span> 
//                     </div>
//                     <div class="detail_con">
//                       <span class="label">Size:</span>
//                       <span class="data">${temple.area} sq ft</span> 
//                     </div>
//                 </div>
//                 <img src="${temple.imageUrl}" alt="${temple.templeName} temple" loading = "lazy">
//             </section>`;
//             cardsContainer.innerHTML += templeCards;
//     });
// }

// function displayTemples(templesArray=temples) {
//     const cardsContainer = document.querySelector('.cards-container');
//     cardsContainer.innerHTML = "";
//     templesArray.forEach((temple) => {
//       const templeCards = `<section class="cards">
//                   <h3 class="temple-name">${temple.templeName}</h3>
//                   <div class="temple-info">
//                       <div class="detail_con">
//                         <span class="label">Location:</span>
//                         <span class="data">${temple.location}</span> 
//                       </div>
//                       <div class="detail_con">
//                         <span class="label">Dedicated:</span>
//                         <span class="data">${temple.dedicated}</span> 
//                       </div>
//                       <div class="detail_con">
//                         <span class="label">Size:</span>
//                         <span class="data">${temple.area} sq ft</span> 
//                       </div>
//                   </div>
//                   <img src="${temple.imageUrl}" alt="${temple.templeName} temple" loading = "lazy">
//               </section>`;
//               cardsContainer.innerHTML += templeCards;
//     })
//   }

function createTempleCards() {
    temples.forEach(temple => {
        document.querySelector(".main_grid") = "";
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label>Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label>Dedication:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label>Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName}`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".main_grid").appendChild(card);
});
}
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');

})

oldLink.addEventListener('click', () => {
    mainHeading.textContent = "Old"
})
homeLink.addEventListener('click', () => {
    mainHeading.textContent = "Home"
})
newLink.addEventListener('click', () => {
    mainHeading.textContent = "New"
})
smallLink.addEventListener('click', () => {
    mainHeading.textContent = "Small"
})
largeLink.addEventListener('click', () => {
    mainHeading.textContent = "Large"
})


createTempleCards();
