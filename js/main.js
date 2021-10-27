/**
 * JS CAROUSEL
 *
 * Dati tre array contenenti
 * una lista ordinata di 5 immagini e
 * una lista ordinata dei relativi 5 luoghi,
 * e una lista di 5 testi.
 * creare un carosello come nella foto alegata
 *
 * Al click dell'utente sulle frecce l'immagine attiva diventa
 * visibile in formato grande a sinistra e
 * nel suo angolo in basso a destra dovranno essere aggiunti i relativi titolo e il testo.
 * Aggiorniamo anche la thumbnail attiva.
 */

// Immagini
const imageCollection = ['./img/01.jpg', './img/02.jpg', './img/03.jpg', './img/04.jpg', './img/05.jpg'];

// Titoli
const titleCollection = ['Svezia', 'Svizzera', 'Gran Bretagna', 'Germania', 'Paradise'];

// Testi
const textCollection = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

/* Logic */

// destructuring
const images = document.querySelector('.images');
const thumbs = document.querySelector('.thumbs');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

for (let i = 0; i < imageCollection.length; i++) {
    const path = imageCollection[i];
    images.innerHTML += `
    <div class="image-container ${i === 0 ? 'active' : ''}">
        <img src="${path}" alt="Lorem">
        <div class="text">
            <h3>${titleCollection[0]}</h3>
            <p>${textCollection[0]}</p>
        </div>
    </div>
    `;
    prevBtn.insertAdjacentHTML('beforebegin', `<div class="thumb ${i === currentIndex ? 'active' : ''}"><img src="${path}" alt="Lorem"></div>`);
}

nextBtn.addEventListener('click', function () {
    // index update
    currentIndex < imageCollection.length - 1 ? ++currentIndex : (currentIndex = 0);
    // class reset
    if (images.getElementsByClassName('active')[0]) images.getElementsByClassName('active')[0].classList.remove('active');
    if (thumbs.getElementsByClassName('active')[0]) thumbs.getElementsByClassName('active')[0].classList.remove('active');
    images.getElementsByClassName('image-container')[currentIndex].classList.add('active');
    thumbs.getElementsByClassName('thumb')[currentIndex].classList.add('active');
});
