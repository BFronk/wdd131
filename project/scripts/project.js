// Update the current year
const currentYearElement = document.getElementById('currentYear');
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;

// Update the last modified date
const lastModifiedElement = document.getElementById('lastModified');
const lastModifiedDate = new Date(document.lastModified);
lastModifiedElement.textContent = `Last Modification: ${lastModifiedDate.toLocaleDateString()} ${lastModifiedDate.toLocaleTimeString()}`;

const mainTitle = document.querySelector("#main-title");
const mainNav = document.querySelector("#main-navi");
const mainLink = document.querySelector("#main-link");
const gamesLink = document.querySelector("#games-link");
const formLink = document.querySelector("#form-link");

mainTitle.addEventListener('click', () => {
	mainNav.classList.toggle('show');
	hambutton.classList.toggle('show');
})


