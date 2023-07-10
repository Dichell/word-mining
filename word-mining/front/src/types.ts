
export interface IResponse<T> {
    data: T
    status: string,
    message: string
}

export interface IGeneralStore {
    token: string,
    isAuth: boolean,
    userEmail: string,
    isLoading: boolean,
}

export interface BaseStore {
    isActive: boolean,
    loading?: boolean
}

export interface IPronouncingStore extends BaseStore {
    newTranslationTrigger: number
    pronounceData: IPronounceData
    autoPlay: boolean
}

export interface ITranslateStore extends BaseStore {
    loadingTranslate: boolean,
    loadingAlternatives: boolean,
    loadingExamples: boolean,
    languages: Ilanguages[],
    textInput: string,
    translateObject: ITranslateObject,
    alternativeTranslations: IAlternativeTranslations[],
    examplesTranslations: IExamplesTranslations[],
    translateHistory: ITranslateObject[],
    translateExplanation: string
}

export interface Ilanguages {
    key: number,
    name: string,
    value: string,
    short: string
}

export interface ITranslateObject {
    sourceText: string, 
    fromLangKey: number, 
    toLangKey: number, 
    translatedText: string
}

export interface IPronounceData {
    text: string
    speakLanguageValue: string
}

export interface IAlternativeTranslations {
    normalizedTarget: string,
    displayTarget: string,
    posTag: string,
    confidence: number,
    prefixWord: string,
    backTranslations: {
        normalizedText: string,
        displayText: string,
        numExamples: number,
        frequencyCount: number
    }[]
}

export interface IAltText {
    itemText: string,
    itemTrans: string
}

export interface IExamplesTranslations {
    sourcePrefix: string,
    sourceTerm: string,
    sourceSuffix: string,
    targetPrefix: string,
    targetTerm: string,
    targetSuffix: string
}