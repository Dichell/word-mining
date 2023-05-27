
export interface IGeneralStore {
    token: string,
    isAuth: boolean,
    userEmail: string,
    isLoading: boolean,
}

export interface BaseStore {
    isActive: boolean,
    loading: boolean
}

export interface IPronouncingStore extends BaseStore {
    newTranslationTrigger: number
    pronounceData: IPronounceData
}

export interface ITranslateStore extends BaseStore {
    languages: Ilanguages[],
    textInput: string,
    translateObject: ITranslateObject
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
