export interface GeneralStore {
    token: string,
    isAuth: boolean,
    userEmail: string,
    isLoading: boolean,
    languages: ObjectSimple[],
    sourceText: string,
    sourceLang: number,
    targetLang: number,
}

export interface BaseStore {
    isActive: boolean
}
export interface YouglishStore extends BaseStore{
    languages: ObjectSimple[],
    sourceText: string,
    sourceLang: number,
    targetLang: number
}
export interface ReversoStore extends BaseStore{
    languages: ObjectSimple[],
    sourceText: string,
    sourceLang: number,
    targetLang: number
}

export interface ObjectSimple {
    key: number,
    value: string
}