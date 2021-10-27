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
const [images, thumbs] = document.querySelector('.carousel').children;
const [prevBtn, nextBtn] = document.querySelector('.thumbs').children;
let currentImage = 0;

for (let i = 0; i < imageCollection.length; i++) {
    const path = imageCollection[i];
    images.innerHTML += `
    <div class="image-container ${i === currentImage ? 'active' : ''}">
        <img src="${path}" alt="Lorem">
        <div class="text">
            <h3>Lorem</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo repellat laborum provident magnam ducimus dolore enim.</p>
        </div>
    </div>
    `;

    thumbs.innerHTML += `
    <div class="thumb ${i === currentImage ? 'active' : ''}">
        <img src="${path}" alt="Lorem">
    </div>
    `;
}
