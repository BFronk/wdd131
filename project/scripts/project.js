let parkArray = [
    "Six Flags Magic Mountain", "Dollywood", "Ceadar Point", "Seaworld Orlando", "Universal Epic Universe",
    "Disneyland Paris", "DIsneyland Tokyo", "Universal Studios Japan", "Hershey Park", "Busch Gardens Tampa",
    "Six Flags fiesta Texas"
]
const parkPicker = document.querySelector('#coaster-generator')

const park = document.querySelector('#chosen-park')
let numberOfCLicks = 0
parkPicker.addEventListener('click', () => {
    numberOfCLicks += 1
    console.log(numberOfCLicks)
    const randomIndex = Math.floor(Math.random() * parkArray.length);
    const randomPark = parkArray[randomIndex];
    park.innerHTML = `You should go to ${randomPark}!`
    if ( numberOfCLicks > 0) {
        parkPicker.classList.toggle('hide')
    }
});

// Update the current year
const currentYearElement = document.getElementById('currentYear');
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;

// Update the last modified date
const lastModifiedElement = document.getElementById('lastModified');
const lastModifiedDate = new Date(document.lastModified);
lastModifiedElement.textContent = `Last Modification: ${lastModifiedDate.toLocaleDateString()} ${lastModifiedDate.toLocaleTimeString()}`;
