import SimpleLightbox from 'simplelightbox';
import Notiflix from 'notiflix';

let lightbox;

export function renderImages(images) {
    const gallery = document.querySelector('.gallery');
    const markup = images.map(image => createImageCard(image)).join('');
    gallery.insertAdjacentHTML('beforeend', markup);
    
    if (!lightbox) {
        lightbox = new SimpleLightbox('.gallery a');
    } else {
        lightbox.refresh();
    }
}

export function clearGallery() {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';
}

export function createImageCard({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) {
    return `
        <div class="photo-card">
            <a href="${largeImageURL}">
                <img src="${webformatURL}" alt="${tags}" loading="lazy" />
            </a>
            <div class="info">
                <p class="info-item"><b>Likes</b> ${likes}</p>
                <p class="info-item"><b>Views</b> ${views}</p>
                <p class="info-item"><b>Comments</b> ${comments}</p>
                <p class="info-item"><b>Downloads</b> ${downloads}</p>
            </div>
        </div>
    `;
}

export function notify(message) {
    Notiflix.Notify.failure(message);
}

export function showLoadMoreButton() {
    const loadMoreBtn = document.querySelector('.load-more');
    loadMoreBtn.style.display = 'block';
}

export function hideLoadMoreButton() {
    const loadMoreBtn = document.querySelector('.load-more');
    loadMoreBtn.style.display = 'none';
}

// render-functions.js
export function showLoadingMessage() {
    const loadingMessage = document.getElementById('loading-message');
    loadingMessage.classList.add('active');
}

export function hideLoadingMessage() {
    const loadingMessage = document.getElementById('loading-message');
    loadingMessage.classList.remove('active');
}
