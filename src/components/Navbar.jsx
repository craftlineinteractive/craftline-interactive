import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export function Brand({ onClick, className = 'font-sans text-lg font-semibold tracking-tight text-[#24231f] md:text-xl' }) {
  return (
    <Link aria-label="Craftline Interactive home" className={`inline-flex shrink-0 items-center justify-center ${className}`} onClick={onClick} to="/">
      <span>Craftline Interactive</span>
    </Link>
  )
}

const linkStyle = ({ isActive }) =>
  `block border-b border-[#dfdcd3] py-3 text-sm transition hover:text-[#ef7058] md:border-0 md:py-0 ${isActive ? 'text-[#ef7058]' : 'text-[#57544d]'}`

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const closeButtonRef = useRef(null)
  const mobileNavigationRef = useRef(null)
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    if (!menuOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
        return
      }

      if (event.key !== 'Tab') return

      const focusableElements = mobileNavigationRef.current?.querySelectorAll('a[href], button:not([disabled])')
      if (!focusableElements?.length) return

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen])

  return (
    <header className={`relative border-b border-[#dfdcd3] bg-[#f8f6f0] ${menuOpen ? 'z-50' : 'z-20'}`}>
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 md:px-8">
        <Brand onClick={closeMenu} />
        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-controls="mobile-navigation"
          className="flex size-10 items-center justify-center rounded-full border border-[#dfdcd3] md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          ref={menuButtonRef}
          type="button"
        >
          <i aria-hidden="true" className={`text-lg ${menuOpen ? 'ph-x' : 'ph-list'}`} />
        </button>
        <nav
          aria-label="Main navigation"
          className="hidden flex-col bg-[#f8f6f0] md:static md:flex md:flex-row md:items-center md:gap-8 md:bg-transparent"
        >
          <NavLink className={linkStyle} end to="/">Home</NavLink>
          <NavLink className={linkStyle} to="/products">Apps &amp; games</NavLink>
          <NavLink className={linkStyle} to="/about">About</NavLink>
          <Link className="mt-3 flex items-center justify-between bg-[#24231f] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#ef7058] md:mt-0 md:py-2.5" to="/contact">
            Say hello <i aria-hidden="true" className="ph-arrow-up-right text-base" />
          </Link>
        </nav>
      </div>
      <div
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-40 md:hidden ${menuOpen ? '' : 'pointer-events-none'}`}
        inert={!menuOpen}
      >
        <button
          aria-label="Close navigation menu"
          className={`absolute inset-0 bg-[#24231f]/45 transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => {
            setMenuOpen(false)
            menuButtonRef.current?.focus()
          }}
          tabIndex={-1}
          type="button"
        />
        <nav
          aria-label="Mobile navigation"
          className={`absolute inset-y-0 right-0 flex h-dvh w-[min(24rem,88vw)] flex-col bg-[#24231f] px-6 pb-8 pt-5 text-[#f8f6f0] shadow-2xl transition-transform duration-300 ease-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          id="mobile-navigation"
          ref={mobileNavigationRef}
        >
          <div className="flex items-center justify-between border-b border-white/15 pb-5">
            <Brand className="font-sans text-lg font-semibold tracking-tight text-[#f8f6f0]" onClick={closeMenu} />
            <button
              aria-label="Close navigation menu"
              className="grid size-10 place-items-center rounded-full border border-white/25 text-lg transition hover:bg-white/10"
              onClick={() => {
                setMenuOpen(false)
                menuButtonRef.current?.focus()
              }}
              ref={closeButtonRef}
              type="button"
            >
              <i aria-hidden="true" className="ph-x" />
            </button>
          </div>
          <div className="mt-8 flex flex-col">
            <span className="mb-3 font-mono text-[10px] uppercase tracking-[.15em] text-[#aaa59a]">Explore</span>
            <NavLink className={({ isActive }) => `border-b border-white/15 py-4 font-sans text-2xl tracking-tight transition hover:text-[#d7ed75] ${isActive ? 'text-[#d7ed75]' : ''}`} end onClick={closeMenu} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => `border-b border-white/15 py-4 font-sans text-2xl tracking-tight transition hover:text-[#d7ed75] ${isActive ? 'text-[#d7ed75]' : ''}`} onClick={closeMenu} to="/products">Apps &amp; games</NavLink>
            <NavLink className={({ isActive }) => `border-b border-white/15 py-4 font-sans text-2xl tracking-tight transition hover:text-[#d7ed75] ${isActive ? 'text-[#d7ed75]' : ''}`} onClick={closeMenu} to="/about">About</NavLink>
          </div>
          <div className="mt-auto">
            <Link className="flex min-h-14 items-center justify-between bg-[#d7ed75] px-5 text-sm font-semibold text-[#24231f] transition hover:-translate-y-0.5 hover:bg-[#f8f6f0]" onClick={closeMenu} to="/contact">
              Say hello <i aria-hidden="true" className="ph-arrow-up-right text-base" />
            </Link>
            <a className="mt-5 inline-block text-xs text-[#c1bdb1] transition hover:text-[#d7ed75]" href="mailto:craftlineinteractive@gmail.com">craftlineinteractive@gmail.com</a>
          </div>
        </nav>
      </div>
    </header>
  )
}
