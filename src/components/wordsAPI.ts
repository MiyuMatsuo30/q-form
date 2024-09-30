import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://wordsapiv1.p.rapidapi.com/words/',
    headers: {
        'x-rapidapi-key': '2b74b698b7msh54cf0f18eeff0c2p1b1cf1jsn257225d28e8e',
        'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com'
    }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}


