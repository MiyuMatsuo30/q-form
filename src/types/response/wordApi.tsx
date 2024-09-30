export type wordApiRes = {
    word: string,
    results: Array<{
        definition: string,
        partOfSpeech: string,
        synonyms: Array<string>,
        similarTo: Array<string>,
        derivation: Array<string>,
        examples: Array<string>
    }>,
    syllables: {count: number, list: Array<string>},
    pronunciation: {all: string}
    frequency: number
}