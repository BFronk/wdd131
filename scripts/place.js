function calculateWindChill(temp, wind) {
    let retval = 0
    if (temp > 50 & wind > 3) {
        retval = 91.4 + (91.4- temp) * (.023* wind -.304* wind/ wind - .474)
    }
    return retval
}

const windchill = calculateWindChill(65, 25);
const windchillval = document.getElementById('windchillval')
windchillval.textContent = "Wind Chill: " + windchill.toPrecision(2) + "°F";
windchillval.style.fontWeight = "bold"
console.log("hello world")
