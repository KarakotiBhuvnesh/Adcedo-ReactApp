import { useEffect } from 'react'
export function useScrollToHash(offset = 80) {
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const el = document.querySelector(hash) as HTMLElement | null
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    }
  }, [])
}
