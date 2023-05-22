export interface YouglishStore {
    languages: YouglishLangs[],
    currentText: string,
    sourceLang: number,
    targetLang: number,
    token: string,
    isAuth: boolean,
    userEmail: string,
    isLoading: boolean
}

export interface YouglishLangs {
    key: number,
    value: string
}