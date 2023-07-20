import { LanguigesShort, Languiges } from '../common/types/enums'

export interface Entity {
    added: string
}

export interface User extends Entity{
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

export interface Dictionary extends Entity {
        word: string
        freqvency: number
        translations: any
        source: LanguigesShort
}

export interface ITranslateData {
    text: string, 
    source: string,
    target: string
    translation?: string
}
