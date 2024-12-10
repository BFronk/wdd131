const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const homeLink = document.querySelector("#home-link"); 
const oldLink = document.querySelector("#old-link");
const newLink = document.querySelector("#new-link"); 
const smallLink = document.querySelector("#small-link"); 
const largeLink = document.querySelector("#large-link");
const mainHeading = document.querySelector("#main-heading")

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
const temples = [
    {
        templeName: "Salt Lake City, Utah",
        locale: "Salt Lake City", 
        dedicated: "April 6, 1893",
        area:382207 
    },
    {
        templeName: "Ogden Utah",
        locale: "Ogden Utah",
        dedicated: "January 18, 1972",
        area: 112232
    },
    {
        templeName: "Rome Italy",
        locale: "Rome Italy",
        dedicated: "",
        area:41010 
    },
    {
        templeName: "Buenos Aaries, Argentina",
        locale: "Buenos Aaries, Argentina",
        dedicated: "January 17, 1986",
        area:30659
    },
    {
        templeName: "Mesa Arizona",
        locale: "Mesa Arizona",
        dedicated: "October 23, 1927",
        area:113916
    },
    {
        templeName: "Tokyo Japan",
        locale: "Tokyo Japan",
        dedicated: "27–29, 1980",
        area:52590
    },
    {
        templeName: "Fort Lauderdale",
        locale: "Fort Lauderdale",
        dedicated: "May 4, 2014",
        area:30500
    },
    {
        templeName: "Albequerque New Mexico",
        locale: "Albequerque New Mexico",
        dedicated: "March 5, 2000",
        area:34245
    },
    {
        templeName: "",
        locale: "",
        dedicated: "",
        area:0
    },
    {
        templeName: "",
        locale: "",
        dedicated: "",
        area:0
    },
    {
        templeName: "",
        locale: "",
        dedicated: "",
        area:0
    },
    {
        templeName: "",
        locale: "",
        dedicated: "",
        area:0
    },
];
