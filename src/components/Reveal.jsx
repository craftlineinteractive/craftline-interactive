import { useEffect, useRef, useState } from 'react'

export default function Reveal({ children, className = '' }) {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!element || reducedMotion || !('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.disconnect()
      }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 })

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div className={`site-reveal ${isVisible ? 'is-visible' : ''} ${className}`} ref={elementRef}>
      {children}
    </div>
  )
}
