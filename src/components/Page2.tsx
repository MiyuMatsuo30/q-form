import { Box, Button, Container, TextField, Paper } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import axios from 'axios';

const WordsApi = async (word: string) => {
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
        return data.results;
    } catch (error) {
        console.error(error);
        return;
    }
}

const Item = styled(Paper)(({ theme }) => ({
    backGroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: "#1A2027",
    }),
}));

const Page2 = () => {
    const [word, setWord] = useState("");
    const handleChangeWord = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWord(event.currentTarget.value);
    };
    const [wordResult, setWordResult] = useState([{
        definition: "" ,    // 定義
    }]);
    const handleSetResult = async () => {
        if (word !== "") {
            const result = await WordsApi(word);
            setWordResult(result);
        } else {
            setWordResult(wordResult);
        }
    }
    const items = {
        definition: "定義", 
        synonyms: "類義語", 
        antonyms: "対義語",
        examples: "例文",
        typeOf: "一般化",
        hasTypes: "具体化",
        partOf: "部分",
        hasParts: "部品",
        instanceOf: "一例",
        hasInstances: "一例",
        similarTo: "関連単語",
        also: "イディオム",
        entails: "示唆",
        memberOf: "属性",
        hasMembers: "属性",
        substanceOf: "含まれる物質",
        hasSubstances: "含まれる物質",
        inCategory: "カテゴリ",
        hasCategories: "カテゴリ",
        usageOf: "使用例",
        hasUsages: "使用例",
        inRegion: "地域",
        regionOf: "地域",
        pertainsTo: "関連語",
        partOfSpeech: "品詞",
    }
    const gets = [
        "definition",
        "synonyms",
        "antonyms",
        "examples",
        "typeOf",
        "hasTypes",
        "partOf",
        "hasParts",
        "instanceOf",
        "hasInstances",
        "similarTo",
        "also",
        "entails",
        "memberOf",
        "hasMembers",
        "substanceOf", "hasSubstances",
        "inCategory",
        "hasCategories",
        "usageOf",
        "hasUsages",
        "inRegion",
        "regionOf",
        "pertainsTo",
        "partOfSpeech"
    ]
    function ShowItems(result) {
        return (
            {gets.map((getName, gKey) => (
            result[getName] && (<Grid 
                key={gKey}
                container
                direction="row"
                sx={{
                    justifyContent: "left",
                    alignItems: "center",
                }}
            >
                <Grid item sx={{width: 1/6, fontSize: 20}}>{items[getName]}</Grid>
                <Grid item sx={{width: 5/6}}>{result[getName]}</Grid>
            </Grid>)
        ))})
    }
    const Result = () => {
        return (
            <Grid 
                container 
                direction="column"
                sx={{
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                }}
                spacing={2}>
                {wordResult.map((res, key) => (
                    <Box sx={{ width: 1/1 }} key={key}>
                        <Item >
                            <Grid>
                                <Grid item sx={{color: '#3f50b5'}}>{key+1}.</Grid>
                            </Grid>
                            <ShowItems result={res} />
                        </Item>
                    </Box>
                ))}
            </Grid>
        )
    }

    return (
        <Container>
            <Grid container>
                <h1>英英辞典</h1>
            </Grid>
            <Grid container sx={{paddingBottom: 5}}>
                <Grid>
                    <TextField
                        id="search-area"
                        placeholder="word"
                        value={word}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {handleChangeWord(event);}}
                    />
                </Grid>
                <Grid sx={{textAlign: "center"}}>
                    <Button
                        variant="contained"
                        onClick={() => {handleSetResult()}}
                    >調べる</Button>
                </Grid>
            </Grid>
            {wordResult[0].definition !== "" && (<Result />)}
        </Container>
    )
}

export default Page2;