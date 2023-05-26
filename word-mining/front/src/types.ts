
export interface GeneralStore {
    token: string,
    isAuth: boolean,
    userEmail: string,
    isLoading: boolean,
    languages: languages[],
    sourceText: string,
    inputText: string,
    sourceLang: languages,
    targetLang: languages,
}

export interface BaseStore {
    isActive: boolean
}

export interface YouGlishStore extends BaseStore {
    newTranslationTrigger: number
}

export interface languages {
    key: number,
    name: string,
    value: string,
    short: string,
    helloWord: string
}