const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');
const homeLink = document.querySelector("#home-link") 
const oldLink = document.querySelector("#old-link") 
const newLink = document.querySelector("#new-link") 
const smallLink = document.querySelector("#small-link") 
const largeLink = document.querySelector("#large-link") 
const homeHeading = document.querySelector("#home-heading")
const oldHeading = document.querySelector("#old-heading")
const newHeading = document.querySelector("#new-heading")
const smallHeading = document.querySelector("#small-heading")
const largeHeading = document.querySelector("#large-heading")


hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
})

oldLink.addEventListener('click', () => {
	oldHeading.classList.toggle('show');
    smallHeading.classList.remove("show")
    largeHeading.classList.remove('show')
    newHeading.classList.remove('show')
    homeHeading.classList.remove('show')
})
homeLink.addEventListener('click', () => {
	oldHeading.classList.remove('show');
    smallHeading.classList.remove("show")
    largeHeading.classList.remove('show')
    newHeading.classList.remove('show')
    homeHeading.classList.toggle('show')
})

newLink.addEventListener('click', () => {
	oldHeading.classList.remove('show');
    smallHeading.classList.remove("show")
    largeHeading.classList.remove('show')
    newHeading.classList.toggle('show')
    homeHeading.classList.remove('show')
})

smallLink.addEventListener('click', () => {
	oldHeading.classList.remove('show');
    smallHeading.classList.toggle("show")
    largeHeading.classList.remove('show')
    newHeading.classList.remove('show')
    homeHeading.classList.remove('show')
})

largeLink.addEventListener('click', () => {
	oldHeading.classList.remove('show');
    smallHeading.classList.remove("show")
    largeHeading.classList.toggle('show')
    newHeading.classList.remove('show')
    homeHeading.classList.remove('show')
})