import { Link } from 'react-router-dom'
import ProductArtwork from '../components/ProductArtwork'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { products } from '../catalog'

const buttonDark = 'inline-flex min-h-12 items-center justify-center gap-5 bg-[#24231f] px-5 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#ef7058]'

export default function HomePage() {
  const featured = products.filter((product) => product.featured)

  return (
    <main>
      <section className="relative overflow-hidden bg-[#f8f6f0]">
        <div className="mx-auto grid max-w-6xl items-center gap-9 px-5 pb-20 pt-14 md:min-h-155 md:grid-cols-2 md:gap-12 md:px-8 md:pb-20 md:pt-12">
          <div className="relative z-10">
            <span className="mb-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.15em] text-[#77736b]"><span className="size-2 rounded-full bg-[#86a347] ring-4 ring-[#86a347]/15" />A small studio for big feelings</span>
            <h1 className="font-sans text-[clamp(3.75rem,10vw,6.5rem)] font-medium leading-[.88] tracking-[-.095em]">
              We make<br />good things<br /><span className="text-[#f36f58]">feel like play.</span>
            </h1>
            <p className="mt-7 max-w-md text-sm leading-7 text-[#65625b]">
              Craftline is an independent creative studio making thoughtful apps and games for a more curious, joyful everyday.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-5">
              <Link className={buttonDark} to="/products">Explore our work <i aria-hidden="true" className="ph-arrow-up-right text-base" /></Link>
              <Link className="inline-flex items-center gap-3 border-b border-[#24231f] pb-2 text-xs font-semibold" to="/about">Get to know us <i aria-hidden="true" className="ph-arrow-right" /></Link>
            </div>
            <div className="mt-10 flex items-center gap-3 font-mono text-[9px] uppercase leading-relaxed tracking-wider text-[#747168]">
              <i aria-hidden="true" className="ph-asterisk text-2xl text-[#ff755e]" /><span>Independent by nature.<br />Imaginative by design.</span>
            </div>
          </div>
          <div className="relative pl-4 pt-3">
            <span className="absolute -left-1 -top-2 z-10 grid size-20 -rotate-12 place-items-center rounded-full border border-[#24231f] bg-[#d7ed75] text-center font-mono text-[8px] leading-4 tracking-widest">A LITTLE<br />MORE WONDER</span>
            <ProductArtwork product={products[0]} />
            <div className="flex justify-between pt-3 font-mono text-[8px] uppercase tracking-widest text-[#77736b]"><span>01 — {String(products.length).padStart(2, '0')}</span><span>Our little universe</span></div>
          </div>
        </div>
        <div className="flex h-9 items-center justify-center gap-5 border-t border-[#24231f]/10 font-mono text-[7px] tracking-[.17em] text-[#77736b] md:gap-7 md:text-[8px]">
          <span>GOOD IDEAS, GROWING</span><i aria-hidden="true" className="ph-asterisk text-base text-[#ff755e]" /><span>SCROLL TO EXPLORE</span>
        </div>
      </section>

      <section className="border-y border-[#dfdcd3] bg-[#f1eee5]">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 py-10 md:grid-cols-2 md:items-center md:gap-12 md:px-8 md:py-14">
          <p className="font-sans text-4xl leading-none tracking-[-.07em]">Little moments.<br /><span className="text-[#ef715b]">Big imagination.</span></p>
          <Reveal className="max-w-md"><span className="font-mono text-[10px] uppercase tracking-[.15em] text-[#77736b]">Good things take feeling</span><p className="mt-2 text-sm leading-7 text-[#67645d]">We bring a human touch to the things you tap, play, and come back to. Thoughtful by design, a little unexpected, and always made with care.</p><p className="mt-3 text-sm leading-7 text-[#67645d]">Every interaction can make a moment feel clearer, calmer, or more curious. That small shift is where we like to begin.</p></Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading copy="A growing collection of playful tools and pocket-sized worlds." label="A few things we've been making" link="/products" linkLabel="Meet the whole collection" title={<>Made to make<br />your day.</>} />
        <div className="grid gap-7 md:grid-cols-2 md:gap-6">{featured.map((product) => <ProductCard key={product.slug} product={product} />)}</div>
      </section>

      <section className="overflow-hidden bg-[#24231f] text-[#f8f6f0]">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-16 md:min-h-125 md:grid-cols-[.8fr_1.2fr_.5fr] md:px-8 md:py-20">
          <div className="relative mx-auto grid aspect-square w-48 place-items-center rounded-full border border-white/30 text-7xl text-[#f99579] md:w-56">
            <i aria-hidden="true" className="ph-asterisk" /><i aria-hidden="true" className="ph-star-four absolute right-8 top-8 text-2xl text-[#d7ed75]" />
            <span className="absolute h-1/2 w-[135%] rotate-[-35deg] rounded-[50%] border border-white/20" />
          </div>
          <div>
            <span className="font-mono text-[9px] uppercase tracking-[.15em] text-[#c1bdb1]">A studio with a soft spot for details</span>
            <h2 className="mt-4 font-sans text-6xl font-medium leading-[.9] tracking-[-.09em] md:text-8xl">Small team.<br /><em className="text-[#f88d71]">Open minds.</em></h2>
            <p className="my-5 max-w-sm text-sm leading-7 text-[#c1bdb1]">We believe the best digital experiences don't ask for more attention. They give a little something back.</p>
            <Link className="inline-flex min-h-12 items-center gap-5 bg-[#f8f6f0] px-5 text-xs font-semibold text-[#24231f] transition hover:bg-[#d7ed75]" to="/about">A bit about us <i aria-hidden="true" className="ph-arrow-up-right text-base" /></Link>
          </div>
          <div className="hidden self-center text-right font-mono text-[9px] uppercase leading-6 tracking-[.14em] text-[#77736b] md:block">MAKE IT<br />MEAN<br />SOMETHING.<div className="mt-5"><i aria-hidden="true" className="ph-arrow-down-right text-3xl text-[#d7ed75]" /></div></div>
        </div>
      </section>

      <section className="bg-[#f0eee6]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <SectionHeading copy="A little structure helps an idea find its shape. We keep the focus on the feeling first, then make the details earn their place." label="From first thought to little details" title={<>A thoughtful way<br />to make things.</>} />
          <div className="grid gap-3 md:grid-cols-3 md:gap-5">
            {[
              ['01', 'Start with a feeling.', 'What should someone feel, understand, or enjoy in this moment?'],
              ['02', 'Find the simple shape.', 'Give the idea a clear path, with room for curiosity and a few small surprises.'],
              ['03', 'Care about the details.', 'Make every label, transition, and interaction feel considered and easy to follow.'],
            ].map(([number, title, copy]) => (
              <Reveal key={number}>
                <article className="h-full min-h-48 border-t border-[#c9c4b8] py-6 md:pr-5">
                  <span className="font-mono text-[10px] text-[#8c877d]">{number} / THE APPROACH</span>
                  <h3 className="mt-8 font-sans text-2xl tracking-tighter">{title}</h3>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-[#6d6962]">{copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading label="Our north star" title={<>Good design is a<br />feeling you can use.</>} />
        <div className="grid gap-3 md:grid-cols-3 md:gap-5">
          {[
            ['01', 'asterisk', 'Human, first.', 'We start with real people and the small moments that make a day feel better.', 'bg-[#f5d1c5] text-[#d75c4c]'],
            ['02', 'arrow-up-right', 'Curious, always.', 'We follow good questions, unexpected ideas, and the joy of figuring things out.', 'bg-[#d8e4f6] text-[#5077aa]'],
            ['03', 'heart', 'Made with care.', 'We sweat the details so the experience feels simple, considered, and kind.', 'bg-[#e3edaf] text-[#687739]'],
          ].map(([number, icon, title, copy, color]) => (
            <Reveal key={number}>
              <article className="relative min-h-52 border border-[#dfdcd3] p-6">
                <span className="absolute right-5 top-5 font-mono text-[9px] text-[#89857c]">{number}</span>
                <span className={`grid size-11 place-items-center rounded-full text-xl ${color}`}><i aria-hidden="true" className={`ph-${icon}`} /></span>
                <h3 className="mt-5 font-sans text-xl tracking-tight">{title}</h3>
                <p className="mt-2 max-w-xs text-xs leading-6 text-[#6f6b64]">{copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#d9e7bc]">
        <div className="relative mx-auto flex min-h-82.5 max-w-6xl flex-col items-start justify-center gap-6 overflow-hidden px-5 py-14 md:min-h-95 md:flex-row md:items-center md:justify-between md:px-8">
          <div><span className="font-mono text-[10px] uppercase tracking-[.15em] text-[#676d51]">Have a good one in mind?</span><h2 className="mt-4 font-sans text-5xl font-medium leading-[.93] tracking-[-.085em] md:text-7xl">Let&apos;s make<br /><em className="text-[#47764e]">something matter.</em></h2></div>
          <Link aria-label="Get in touch with Craftline Interactive" className="absolute bottom-7 right-5 grid size-24 place-items-center rounded-full border border-[#24231f] bg-[#f8f6f0] text-center font-mono text-[9px] tracking-widest transition hover:rotate-[-8deg] hover:bg-[#d7ed75] md:static md:size-36" to="/contact"><span>LET&apos;S<br />TALK<br /><i aria-hidden="true" className="ph-arrow-up-right mt-2 text-lg" /></span></Link>
          <i aria-hidden="true" className="ph-asterisk absolute right-[20%] top-8 text-4xl text-[#81a25d]" />
        </div>
      </section>
    </main>
  )
}
