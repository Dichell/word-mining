export interface User {
    name: string
    email: string
    password: string
    dateCreated: Date
    lastLogin: number
    provider: string
    photo?: string
    verified?: boolean;
}

export interface ITranslateData {
    text: string, 
    source: string,
    target: string
    translation?: string
}