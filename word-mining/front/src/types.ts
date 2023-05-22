export interface GeneralStore {
    token: string,
    isAuth: boolean,
    userEmail: string,
    isLoading: boolean,
    languages: languages[],
    sourceText: string,
    sourceLang: languages,
    targetLang: languages,
}

export interface BaseStore {
    isActive: boolean
}

export interface languages {
    key: number,
    name: string,
    value: string
}