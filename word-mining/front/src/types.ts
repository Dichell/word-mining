export interface GeneralStore {
    token: string,
    isAuth: boolean,
    userEmail: string,
    isLoading: boolean,
    languages: languages[],
    sourceText: string,
    sourceLang: string,
    targetLang: string,
}

export interface BaseStore {
    isActive: boolean
}
// export interface YouglishStore extends BaseStore{
//     languages: ObjectSimple[],
//     sourceText: string,
//     sourceLang: number,
//     targetLang: number
// }
// export interface ReversoStore extends BaseStore{
//     languages: ObjectSimple[],
//     sourceText: string,
//     sourceLang: number,
//     targetLang: number
// } //TODO delete ?

export interface languages {
    key: number,
    name: string,
    value: string
}