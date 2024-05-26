import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { fetchImages } from './js/pixabay-api';
import { renderImages, clearGallery, notify, showLoadMoreButton, hideLoadMoreButton, showLoadingMessage, hideLoadingMessage} from './js/render-functions';


const form = document.getElementById('search-form');
const loadMoreBtn = document.querySelector('.load-more');

let query = '';
let page = 1;

form.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);

async function onSearch(event) {
    event.preventDefault();
    
    query = event.currentTarget.searchQuery.value.trim();
    
    if (query === '') {
        iziToast.warning({
            title: '',
            message: 'Please enter a search query.',
            position: 'topRight'
        });
        return;
    }
    
    page = 1;
    clearGallery();
    hideLoadMoreButton();
    showLoadingMessage();
    
    try {
        const data = await fetchImages(query, page);
        hideLoadingMessage();
        if (data.hits.length === 0) {
            iziToast.error({
                title: '',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight'
            });
        } else {
            renderImages(data.hits);
            if (data.totalHits > 40) {
                showLoadMoreButton();
            }
        }
    } catch (error) {
        hideLoadingMessage();
        console.error(error);
        iziToast.error({
            title: '',
            message: 'Something went wrong. Please try again.',
            position: 'topRight'
        });
    }
}

async function onLoadMore() {
    page += 1;
    showLoadingMessage();
    try {
        const data = await fetchImages(query, page);
        hideLoadingMessage();
        renderImages(data.hits);
        if (page * 40 >= data.totalHits) {
            hideLoadMoreButton();
            iziToast.warning({
                title: '',
                message: "We're sorry, but you've reached the end of search results.",
                position: 'topRight'
            });
        }
    } catch (error) {
        hideLoadingMessage();
        console.error(error);
        iziToast.error({
            title: '',
            message: 'Something went wrong. Please try again.',
            position: 'topRight'
        });
    }
}
