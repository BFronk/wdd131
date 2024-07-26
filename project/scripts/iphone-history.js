const menubar = document.querySelector('#menu');
const header_link = document.querySelector('.header_links');
const menubar2 = document.querySelector('.navigation');
const pageTitle = document.querySelector('.title');
const homeButton = document.querySelector('.home');
const iosButton = document.querySelector('.ios');
const authButton = document.querySelector('.auth');
const graphButton = document.querySelector('.graphs');
const featuresButton = document.querySelector('.features');
const header = document.querySelector('header');


menubar.addEventListener('click', () => {
    menubar.classList.toggle('show');
    menubar2.classList.toggle('show');
    header_link.classList.toggle('show');
    header.classList.toggle('show')
});
