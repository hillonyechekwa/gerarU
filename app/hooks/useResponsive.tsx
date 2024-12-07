"use client"

import { useEffect, useState, useCallback }  from  'react'


const useResponsive = (query: string) : boolean => {
    const getMatches = useCallback ((query: string): boolean => {
        return typeof window !== 'undefined' ? window.matchMedia(query).matches
            : false;
    }, [])

    const [matches, setMatches] = useState<boolean>(getMatches(query))

    

    useEffect(() => {
        const matchMedia = window.matchMedia(query)

        function handleChange() {
            setMatches(getMatches(query))
        }

        matchMedia.addEventListener('change', handleChange)

        handleChange()

        return () => {
            matchMedia.removeEventListener('change', handleChange)
        }
    }, [query, getMatches])

    return matches
}


export default useResponsive