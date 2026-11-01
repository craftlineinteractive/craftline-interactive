import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro'
import Reveal from '../components/Reveal'

const buttonDark = 'inline-flex min-h-12 items-center justify-center gap-5 bg-[#24231f] px-5 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#ef7058]'

export default function AboutPage() {
  return (
    <main>
      <PageIntro description="We are a creative studio exploring what thoughtful technology can feel like: warmer, more playful, and a little more human." label="A little about our little studio" tint title={<>We believe digital<br />can feel <em className="text-[#f07158]">human.</em></>} />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[.8fr_1.2fr] md:items-center md:gap-24 md:px-8 md:py-24">
        <Reveal>
          <div className="relative mx-auto grid aspect-square w-64 rotate-[-9deg] place-items-center rounded-full bg-[#f7d1c0] text-center font-mono text-[10px] leading-5 tracking-widest md:w-72">THOUGHTFUL<br />BY NATURE<span className="absolute inset-[14%] rounded-full border border-[#24231f]/30" /><i aria-hidden="true" className="ph-asterisk absolute bottom-[14%] right-[9%] text-3xl text-[#df6853]" /></div>
        </Reveal>
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[.15em] text-[#77736b]">Why Craftline?</span>
          <h2 className="mt-4 font-sans text-4xl font-medium leading-none tracking-[-.075em] md:text-6xl">Because the little things are the big things.</h2>
          <p className="mt-5 text-sm leading-7 text-[#6d6962]">That moment when something just clicks. The delight of discovering a new favorite. A tool that gives your attention back instead of asking for more. Those are the feelings we want to make.</p>
          <p className="mt-4 text-sm leading-7 text-[#6d6962]">Craftline Interactive is a demo studio identity built around making playful apps and games with a human point of view. Our portfolio here is a collection of concepts that show the kind of work we love.</p>
          <p className="mt-4 text-sm leading-7 text-[#6d6962]">We’re drawn to work that leaves people a little better than it found them: more at ease, more curious, or ready to carry a small idea into their day.</p>
        </div>
      </section>
      <section className="bg-[#dce8c3]">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-[1.1fr_.9fr] md:items-center md:px-8 md:py-20">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[.15em] text-[#687253]">A few things we believe</span>
            <h2 className="my-4 font-sans text-5xl font-medium leading-none tracking-[-.085em] md:text-7xl">Care is a feature.<br /><em className="text-[#4e7551]">Curiosity is a craft.</em></h2>
            <Link className={buttonDark} to="/products">See what we&apos;re dreaming up <i aria-hidden="true" className="ph-arrow-up-right text-base" /></Link>
          </div>
          <Reveal>
            <div className="border-l border-[#aebc8d] pl-6 md:pl-10">
              <p className="font-serif text-2xl leading-snug text-[#4c5941]">Good experiences make space for the person using them.</p>
              <p className="mt-5 text-sm leading-7 text-[#5e674f]">That means clear choices, a gentle learning curve, and details that feel intentional instead of demanding attention for attention’s sake.</p>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 md:grid-cols-[.8fr_1.2fr] md:gap-20">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[.15em] text-[#77736b]">How an idea takes shape</span>
            <h2 className="mt-4 font-sans text-4xl font-medium leading-[.98] tracking-[-.075em] md:text-6xl">A little thoughtfulness, at every step.</h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-[#6d6962]">A simple way to think about the work: start with people, make the idea easy to meet, and keep polishing until the small details feel right.</p>
          </div>
          <div className="divide-y divide-[#dfdcd3] border-y border-[#dfdcd3]">
            {[
              ['01', 'Listen for the human moment', 'Notice the small need, feeling, or bit of curiosity behind an idea.'],
              ['02', 'Make the path feel clear', 'Shape an experience that is easy to understand and inviting to explore.'],
              ['03', 'Polish what people notice', 'Give words, interactions, and transitions the same thoughtful attention.'],
            ].map(([number, title, copy]) => (
              <Reveal key={number}>
                <article className="grid gap-3 py-6 sm:grid-cols-[3rem_1fr] sm:gap-5">
                  <span className="font-mono text-[10px] text-[#9a958b]">{number}</span>
                  <div><h3 className="font-sans text-xl tracking-tight">{title}</h3><p className="mt-2 max-w-md text-sm leading-6 text-[#6d6962]">{copy}</p></div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
