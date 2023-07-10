export function updateObject<M, K extends keyof M>(obj: M, key: K, value: M[K]) {
    obj[key] = value
}