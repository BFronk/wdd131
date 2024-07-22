const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav');
const album = document.querySelector('#temple-album')
const homeButton = document.querySelector(".home");
const oldButton = document.querySelector(".old");
const newButton = document.querySelector(".new");
const largeButton = document.querySelector(".large");
const smallButton = document.querySelector(".small");
const pageTitle = document.querySelector('#title');

const temples = [
	{
		templeName: "Salt Lake",
		location: "Salt lake City Utah",
		dedicated: "1893, April, 6",
		area: 253015,
		imgWidth: 400,
		imgHieght: 250,
		imageUrl: "images/salt-lake-temple.jpeg"
	},
	{
		templeName: "Provo",
		location: "Provo, Utah",
		dedicated: "1972, February, 9 ",
		area: 128325,
		imgWidth: 400,
		imgHieght: 250,
		imageUrl: "images/Provo_Utah_Temple.jpeg"
	},
	{
		templeName: "Orlando",
		location: "Orlando, Florida",
		dedicated: "1994, October, 9",
		area: 70000,
		imgWidth: 400,
		imgHieght: 250,
		imageUrl: "images/Orlando_Florida_Temple.jpeg"
	},
	{
		templeName: "Fort Lauderdale",
		location: "Fort Lauderdale, Florida",
		dedicated: "2014, May, 4",
		area: 30500,
		imgWidth: 400,
		imgHieght: 225,
		imageUrl: "images/Fort_Lauderdale_Florida_Temple.jpg"
	},
	{
		templeName: "Pheonix Arizona",
		location: "Pheonix Arizona",
		dedicated: "2014, November, 16",
		area: 64870,
		imgWidth: 400,
		imgHieght: 250,
		imageUrl: "images/phoenix_arizona_temple.webp"
	},
	{
		templeName: "Mesa Arizona",
		location: "Mesa, Arizona",
		dedicated: "1927, October, 23",
		area: 113916,
		imgWidth: 400,
		imgHieght: 250,
		imageUrl: "images/Mesa_Temple.jpg"
	},
	{
		templeName: "Mexico City",
		location: "Mexico City, Mexico",
		dedicated: "1983, 2, December ",
		area: 116642,
		imgWidth: 400,
		imgHieght: 250,
		imageUrl: "images/Mexico_City_Temple.jpeg"
	},
	{
		templeName: "Buenos Aries",
		location: "Buenos Aries, Argentina",
		dedicated: "1986, January, 17 ",
		area: 30659,
		imgWidth: 400,
		imgHieght: 250,
		imageUrl: "images/Buenos_Aires_Argentina_Temple.jpeg"
	},
	{
		templeName: "Rome",
		location: "Rome, Italy",
		dedicated: "2019, March, 10",
		area: 41010,
		imgWidth: 400,
		imgHieght: 250,
		imageUrl: "images/Rome_Temple.jpeg"
	},
	{
		templeName: "Fukuoka, Japan",
		location: "Fukuoka, Japan",
		dedicated: "2000, June, 11, ",
		area: 10700,
		imgWidth: 399,
		imgHieght: 250,
		imageUrl: "images/Fukuoka_Japan_Temple.jpeg"
	},
	{
		templeName: "Los Angeles",
		location: "Los Angeles, California",
		dedicated: "1956, March, 11, ",
		area: 90614,
		imgWidth: 400,
		imgHieght: 250,
		imageUrl: "images/Los_Angeles_Temple.jpeg"
	},
	{
		templeName: "Ogden",
		location: "Ogden, Utah",
		dedicated: "1972, January, 18",
		area:112232,
		imgWidth: 399,
		imgHieght: 250,
		imageUrl: "images/Ogden_Temple.jpeg"
	}
];

function buildTempleAlbum(filter = temples) {
	album.innerHTML = ""

	filter.forEach(temple => {
		const name = temple.templeName;
		const location = temple.location;
		const dedicated = temple.dedicated;
		const area = temple.area;
		const image = temple.imageUrl;
		const imgWidth = temple.imgWidth;
		const imgHieght = temple.imgHieght;
		const card = document.createElement('figure')

		album.appendChild(card).innerHTML = `<h3>${name}</h3><figcaption>Location:<span> ${location}</span></figcaption><figcaption>Dedicated:<span> ${dedicated}</span></figcaption><figcaption>Area:<span> ${area} sq ft</span></figcaption><img src="${image}" alt="the ${name} Temple" width="${imgWidth}" height="${imgHieght}" loading="lazy">`;
	});
}

buildTempleAlbum();

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

homeButton.addEventListener('click', () => {
	document.querySelector('.active').classList.toggle('active');
	pageTitle.textContent = 'Home';
	homeButton.classList.toggle('active');

	buildTempleAlbum(temples);
})

oldButton.addEventListener('click', () => {
	document.querySelector('.active').classList.toggle('active');
	pageTitle.textContent = 'Old';
	oldButton.classList.toggle('active');

	buildTempleAlbum(temples.filter(temple => temple.dedicated.split(',')[0] < 1900));
})

newButton.addEventListener('click', () => {
	document.querySelector('.active').classList.toggle('active');
	pageTitle.textContent = 'New';
	newButton.classList.toggle('active');

	buildTempleAlbum(temples.filter(temple => temple.dedicated.split(',')[0] > 2000));
})

largeButton.addEventListener('click', () => {
	document.querySelector('.active').classList.toggle('active');
	pageTitle.textContent = 'Large';
	largeButton.classList.toggle('active');

	buildTempleAlbum(temples.filter(temple => temple.area > 90000));
})

smallButton.addEventListener('click', () => {
	document.querySelector('.active').classList.toggle('active');
	pageTitle.textContent = 'Small';
	smallButton.classList.toggle('active');

	buildTempleAlbum(temples.filter(temple => temple.area < 40000));
})