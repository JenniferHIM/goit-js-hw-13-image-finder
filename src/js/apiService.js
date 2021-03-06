import errorNotice from './notice.js'
const API_KEY = '21282132-86f7ea58f9a9b3bb2c4722a7e';
const BASE_URL = 'https://pixabay.com/api'

export default class PixabayService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }
   
    async fetchHits() {
        try {
            const request = `/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`
        const response = await fetch(BASE_URL + request);
        const newResponse = await response.json();
        return newResponse.hits;
    }
        catch {
            errorNotice();
        }
    }
    
    incrementPage(){
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
            return this.searchQuery;
    }
    set query(newQuery) {
            this.searchQuery = newQuery;
    }
}