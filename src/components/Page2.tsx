import { Button, Container, Grid, TextField } from '@mui/material';
import wordsApiRes from '../types/response/wordsApiRes';
import React, { useState } from 'react';
import axios from 'axios';

const WordsApi: React.FC = async (word: string) => {
    const options = {
    method: 'GET',
    url: `https://wordsapiv1.p.rapidapi.com/words/${word}`,
    headers: {
        'x-rapidapi-key': '2b74b698b7msh54cf0f18eeff0c2p1b1cf1jsn257225d28e8e',
        'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com'
    }
    };
    try {
        const response = await axios.request(options);
        const data = {
            word: response.data.word,
            results: response.data.results,
            syllables: response.data.syllables,
            pronunciation: response.data.pronuncication,
            frequency: response.data.frequency
        }
        return data;
    } catch (error) {
        console.error(error);
        return;
    }
}

const Page2 = () => {
    const [word, setWord] = useState("");
    const handleChangeWord = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWord(event.currentTarget.value);
    };
    type Props = {
        word: string
    } 
    const Result = async ({word}: Props) => {
        const result = await WordsApi(word);
        console.log(result);
        return (
            <div>{}</div>
        )
    }
    const [wordResult, setWordResult] = useState((<div></div>));
    const handleSetResult = () => {
        setWordResult(
            <Result word={word} />
        )
    }
    return (
        <Container>
            <Grid container>
                <h1>英英辞典</h1>
            </Grid>
            <Grid container>
                <Grid>
                    <TextField
                        id="search-area"
                        placeholder="word"
                        value={word}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {handleChangeWord(event);}}
                    />
                </Grid>
                <Grid>
                    <Button 
                        variant="contained"
                        onClick={() => {handleSetResult()}}
                    >調べる</Button>
                    {wordResult}
                </Grid>
            </Grid>
        </Container>
    )
}

export default Page2;