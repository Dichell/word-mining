
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
}

export interface ITranslateStore extends BaseStore {
    loadingTranslate: boolean,
    loadingAlternatives: boolean,
    languages: Ilanguages[],
    textInput: string,
    translateObject: ITranslateObject,
    alternativeTranslations: IAlternativeTranslations[]
}

export interface Ilanguages {
    key: number,
    name: string,
    value: string,
    short: string,
    helloWord: string
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
