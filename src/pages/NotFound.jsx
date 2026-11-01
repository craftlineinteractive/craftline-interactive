import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <main className="grid min-h-[65vh] items-center">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8">
        <span className="font-mono text-[10px] uppercase tracking-[.15em] text-[#77736b]">A little off the map</span>
        <h1 className="mt-5 font-sans text-6xl font-medium leading-[.9] tracking-[-.09em] md:text-8xl">This page took<br /><em className="text-[#ef7158]">a detour.</em></h1>
        <p className="my-6 max-w-md text-sm leading-7 text-[#6d6962]">We couldn&apos;t find what you were looking for. Let&apos;s get you back to the good stuff.</p>
        <Link className="inline-flex min-h-12 items-center justify-center gap-5 bg-[#24231f] px-5 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#ef7058]" to="/products">Explore our work <i aria-hidden="true" className="ph-arrow-up-right text-base" /></Link>
      </div>
    </main>
  )
}
