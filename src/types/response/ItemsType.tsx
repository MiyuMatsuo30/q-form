export type ItemsType1 = Record<
    "definition"|
    "synonyms"|
    "antonyms"|
    "examples"|
    "typeOf"|
    "hasTypes"|
    "partOf"|
    "hasParts"|
    "instanceOf"|
    "hasInstances"|
    "similarTo"|
    "also"|
    "entails"|
    "memberOf"|
    "hasMembers"|
    "substanceOf"| 
    "hasSubstances"|
    "inCategory"|
    "hasCategories"|
    "usageOf"|
    "hasUsages"|
    "inRegion"|
    "regionOf"|
    "pertainsTo"|
    "partOfSpeech"
, string | [] >;

export type ItemsType2 = {
    definition: string | [],
    synonyms: string | [],
    antonyms: string | [],
    examples: string | [],
    typeOf: string | [],
    hasTypes: string | [],
    partOf: string | [],
    hasParts: string | [],
    instanceOf: string | [],
    hasInstances: string | [],
    similarTo: string | [],
    also: string | [],
    entails: string | [],
    memberOf: string | [],
    hasMembers: string | [],
    substanceOf: string | [],
    hasSubstances: string | [],
    inCategory: string | [],
    hasCategories: string | [],
    usageOf: string | [],
    hasUsages: string | [],
    inRegion: string | [],
    regionOf: string | [],
    pertainsTo: string | [],
    partOfSpeech: string | [],
};

export type ItemsType = {[key: string]: string | [string]};