import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID d75b73d049f5d5d8eaa22c2bf704da6c433544687770ec98a825bbd33e5e886a'
    }
});
