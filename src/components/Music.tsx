import axios from 'axios';
import { useState } from 'react';
import { ItemsType } from '../types/response/ItemsType';
import Grid2 from '@mui/material/Grid2';
import { Button, Container } from '@mui/material';

// 参考: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min: number, max: number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

// const GetAccessToken = () => {
//     const options = {
//         method: 'POST',
//         url: 'https://accounts.spotify.com/api/token',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//             'client_id': import.meta.env.SPOTIFYAPI_KEY,
//             'client_secret': import.meta.env.SPOTIFYAPI_SECRET
//         },
//         form: {
//             'grant_type': 'client_credentials',
//         },
//         json: true
//     };
//     try {
//         const response = await axios.request(options);
//         const token = response.access_token;
//         return
//     }
// }

const SpotifyAPI = async() => {
    const moji = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZあいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";
    const limit = 20;
    const options = {
        method: 'GET', 
        url: `https://api.spotify.com/v1/search?q=${getRandomInt(0, moji.length-1)}&limit=${limit}?type=track?offset=0`,
        headers: {
            'Authorization': `Bearer  ${import.meta.env.SPOTIFYAPI_KEY}_${import.meta.env.SPOTIFYAPI_SECRET}`
        }
    }
    try {
        const response = await axios.request(options);
        const data : ItemsType[] = response.data.tracks.items;
        return data;
    } catch (error) {
        console.log(error);
        alert("見つかりませんでした。");
    }
}

const Music = () => {
    const [getResult, setGetResult] = useState<ItemsType[]>();
    const handleSetResult = async () => {
        const result = await SpotifyAPI()
        setGetResult(result);
    }
    console.log(getResult);
    return (
        <Container>
            <Grid2 container><h1>30秒視聴</h1></Grid2>
            <Grid2 container>
                <Grid2>
                    <Button 
                        variant="contained"
                        onClick={() => {handleSetResult()}}
                    >音楽を探す</Button>
                </Grid2>
            </Grid2>
        </Container>
    )
}

export default Music;