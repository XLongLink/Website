import { useState, useEffect, createContext } from "react"

export const Storage = createContext<any | null>(null)

export function useStorage(key: string, defaultValue: any = false) {

    const [value, setValue] = useState(null)

    // call this mento update value
    const updateValue = (newValue: any) => {
        if (typeof window === 'undefined') return
        setValue(newValue)
        window.localStorage.setItem(key, JSON.stringify(defaultValue));
    }

    /*
        set default value, if given otherwise load from localstorage
    */
    useEffect(() => {
        if (defaultValue || defaultValue == null) {
            updateValue(defaultValue)
            return
        }
        updateValue(window.localStorage.getItem(key));
        console.log(value)
    }, [])

    return [value, updateValue];
}