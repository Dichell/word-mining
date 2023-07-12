export interface User {
    name: string
    email: string
    password: string
    nativeLang: Languiges
    dateCreated: Date
    lastLogin: number
    photo?: string
    verified?: boolean
    provider: string
}

export interface ITranslateData {
    text: string, 
    source: string,
    target: string
    translation?: string
}

enum Languiges {
    Russian = "russian",
    English = "english",
    Hebrew = "hebrew"
}
