import axios from 'axios';

const API_KEY = '43559338-49e51b38628b18648a05e4f59';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page: 40,
    };

    const response = await axios.get(BASE_URL, { params });
    return response.data;
}