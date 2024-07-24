const pageTitle = document.querySelector('.title');
const homeButton = document.querySelector('.home');
const iosButton = document.querySelector('.ios');
const authButton = document.querySelector('.auth');
const graphButton = document.querySelector('.graphs');
const featuresButton = document.querySelector('.features');

// function createLayout() {
   
// }
// homeButton.addEventListener('click', () => {
//     document.querySelector('.active').classList.toggle('active');
//     pageTitle.textContent = 'History of the iPhone';
//     homeButton.classList.toggle('active');
// });
// iosButton.addEventListener('click', () => {
//     document.querySelector('.active').classList.toggle('active');
//     pageTitle.textContent = 'IOS';
//     homeButton.classList.toggle('active');
// });

// iosButton.addEventListener('click', () => {
// 	document.querySelector('.active').classList.toggle('.active');
// 	pageTitle.textContent = 'Old';
// 	iosButton.classList.toggle('.active');
// })

homeButton.addEventListener('click', () => {
    document.querySelector('.active').classList.toggle('active');
    pageTitle.textContent = 'home';
    homeButton.classList.toggle('active');
});

iosButton.addEventListener('click', () => {
    document.querySelector('.active').classList.toggle('active');
    pageTitle.textContent = 'iOS';
    iosButton.classList.toggle('active');
});

authButton.addEventListener('click', () => {
    document.querySelector('.active').classList.toggle('active');
    pageTitle.textContent = 'auth';
    authButton.classList.toggle('active');
});

