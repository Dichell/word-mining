import { LocalStorageKeys } from "@/enums"

export class localStorageMethods {
    static methodName = "localStorageMethods"
    
    public static setItem (key: LocalStorageKeys, value: string | boolean | Object): void {
        if(typeof value == "string"){
            localStorage.setItem(key, value)
        } else if (typeof value == "boolean"){
            localStorage.setItem(key, value.toString())
        } else {
            localStorage.setItem(key, JSON.stringify(value))
        }
    }
    public static getString (key: LocalStorageKeys): string | undefined {
        const data = localStorage.getItem(key)
        if(data && typeof data == "string"){
            return data
        }
        return undefined
    }
    public static getAndToBoolean (key: LocalStorageKeys): boolean | undefined {
        const data = localStorage.getItem(key)
        if(data && typeof data == "string"){
            return data == "true" ? true : false
        }
        return undefined
    }
    public static getAndToObject<T>(key: LocalStorageKeys): T | undefined {
        const data = localStorage.getItem(key)
        if(data && typeof data == "string"){
            return JSON.parse(data)
        }
        return undefined
    }    
}
