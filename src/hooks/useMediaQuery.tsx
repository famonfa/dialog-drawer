'use client'
import { useEffect, useState } from "react"

export function useMediaQuery(width: number) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${width}px)`)
    setMatches(mql.matches)
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches)
    mql.addEventListener("change", handler)
    return () => mql.removeEventListener("change", handler)
  }, [width])

  return matches
}
