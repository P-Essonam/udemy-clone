import React, { useEffect } from "react";



export function useDebounce<T>(value: T, delay?: number): T {
    const [debouncedValue, setDebouncedValue] = React.useState(value)
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value)
        }, delay || 500)

        return () => {
            clearTimeout(timer)
        }
    }, [value, delay])

    return debouncedValue
}