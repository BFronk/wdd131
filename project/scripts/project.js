let parkArray = [
    "Six Flags Magic Mountain", "Dollywood", "Ceadar Point", "Seaworld Orlando", "Universal Epic Universe",
    "DIsneyland Paris", "DIsneyland Tokyo", "Universal Studios Japan", "Hershey Park", "Busch Gardens Tampa",
    "Six Flags fiesta Texas"
]
const parkPicker = document.querySelector('#coaster-generator')

parkPicker.addEventListener('click', () => {
	console.log(Math.floor(Math.random(1) * parkPicker.length))
}) 