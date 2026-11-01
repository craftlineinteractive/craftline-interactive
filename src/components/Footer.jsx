import { Link } from 'react-router-dom'
import { Brand } from './Navbar'

const emailAddress = 'craftlineinteractive@gmail.com'

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-[#24231f] text-[#f8f6f0]">
      <div className="mx-auto max-w-6xl px-5 pb-10 pt-14 md:px-8 md:pb-14 md:pt-20">
        <div className="grid gap-12 border-b border-white/15 pb-12 md:grid-cols-[1.25fr_.75fr_.9fr] md:gap-16 md:pb-16">
          <div className="flex flex-col items-start gap-4">
            <Brand className="text-lg font-semibold tracking-tight text-[#f8f6f0] md:text-xl" />
            <div className="min-w-0">
              <p className="font-sans text-2xl font-medium leading-[.98] tracking-[-.06em] md:text-3xl">Good things should feel good to use.</p>
              <p className="mt-3 max-w-xs text-sm leading-6 text-[#c1bdb1]">Thoughtful apps, playful little worlds, and a little more wonder in the everyday.</p>
            </div>
          </div>
          <nav aria-label="Footer navigation" className="flex flex-col items-start gap-4 text-sm">
            <span className="mb-1 font-mono text-[10px] uppercase tracking-[.15em] text-[#aaa59a]">Explore</span>
            <Link className="transition hover:text-[#d7ed75]" to="/products">Apps &amp; games</Link>
            <Link className="transition hover:text-[#d7ed75]" to="/about">About the studio</Link>
            <Link className="transition hover:text-[#d7ed75]" to="/contact">Contact</Link>
          </nav>
          <div className="flex flex-col items-start gap-4">
            <span className="mb-1 font-mono text-[10px] uppercase tracking-[.15em] text-[#aaa59a]">Say hello</span>
            <p className="max-w-xs text-sm leading-6 text-[#c1bdb1]">Have a thoughtful idea, a question, or simply want to get in touch?</p>
            <a className="break-all border-b border-white/35 pb-1 text-sm transition hover:border-[#d7ed75] hover:text-[#d7ed75]" href={`mailto:${emailAddress}`}>{emailAddress}</a>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-6 py-10 md:flex-row md:items-end">
          <div>
            <span className="font-mono text-[9px] uppercase tracking-[.15em] text-[#aaa59a]">A good place to start</span>
            <h2 className="mt-3 font-sans text-4xl font-medium leading-none tracking-[-.07em] md:text-5xl">Let&apos;s make something matter.</h2>
          </div>
          <Link className="inline-flex min-h-12 items-center justify-between gap-8 self-start bg-[#d7ed75] px-5 text-xs font-semibold text-[#24231f] transition hover:-translate-y-0.5 hover:bg-[#f8f6f0] md:self-auto" to="/contact">
            Start a conversation <i aria-hidden="true" className="ph-arrow-up-right text-base" />
          </Link>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-wrap gap-x-6 gap-y-2 border-t border-white/20 px-5 py-4 font-mono text-[9px] text-[#aaa59a] md:justify-between md:px-8">
        <span>© {new Date().getFullYear()} Craftline Interactive</span>
        <span>Made with a little extra care <i aria-hidden="true" className="ph-asterisk ml-1 text-[#ff755e]" /></span>
      </div>
    </footer>
  )
}
