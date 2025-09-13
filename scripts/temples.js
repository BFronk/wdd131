const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const  homeLink = document.querySelector("#home-link"); 
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
