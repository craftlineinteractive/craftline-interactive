import PageIntro from '../components/PageIntro'
import Reveal from '../components/Reveal'

const emailAddress = 'craftlineinteractive@gmail.com'
const buttonDark = 'inline-flex min-h-12 items-center justify-center gap-5 bg-[#24231f] px-5 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#ef7058]'

export default function ContactPage() {
  return (
    <main>
      <PageIntro description="A good idea, a kind note, a question about our work — our inbox is open." label="The start of something" tint title={<>Have a good<br /><em className="text-[#f07158]">feeling about this?</em></>} />
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.15fr_.85fr] md:gap-24 md:px-8 md:py-24">
        <div className="max-w-lg"><i aria-hidden="true" className="ph-asterisk text-4xl text-[#ed755c]" /><p className="my-5 font-serif text-2xl leading-snug">Some of the best things start with a hello. Tell us what you&apos;re thinking and we&apos;ll take it from there.</p><a className={buttonDark} href={`mailto:${emailAddress}`}>Write us a note <i aria-hidden="true" className="ph-arrow-up-right text-base" /></a><span className="mt-3 block font-mono text-[8px] tracking-wide text-[#837e75]">Sample email — replace with your real contact before launch.</span></div>
        <div className="flex flex-col items-start gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[.15em] text-[#77736b]">Find us in your inbox</span>
          <a className="border-b border-[#24231f] pb-1 font-serif text-xl tracking-tight" href={`mailto:${emailAddress}`}>{emailAddress}</a>
          <span className="mt-7 font-mono text-[10px] uppercase tracking-[.15em] text-[#77736b]">A note about this site</span>
          <p className="max-w-sm text-xs leading-6 text-[#6d6962]">This is a static portfolio demo. Messages open your email app; nothing is sent to a website server.</p>
        </div>
      </section>
      <section className="bg-[#f0eee6]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-6 md:grid-cols-[.75fr_1.25fr] md:gap-16">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[.15em] text-[#77736b]">What’s on your mind?</span>
              <h2 className="mt-4 font-sans text-4xl font-medium leading-[.98] tracking-[-.075em] md:text-5xl">A good note can start anywhere.</h2>
              <p className="mt-4 max-w-sm text-sm leading-7 text-[#6d6962]">There’s no special format. A few lines about your idea or question are plenty to get the conversation started.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ['01', 'A creative idea', 'A thought about an app, a game, or a more human digital experience.'],
                ['02', 'A question', 'Something about the studio, the portfolio, or one of the concepts.'],
                ['03', 'A hello', 'A note to introduce yourself or share something you think we’d enjoy.'],
              ].map(([number, title, copy]) => (
                <Reveal key={number}>
                  <article className="h-full min-h-44 border border-[#d8d4c9] bg-[#f8f6f0] p-5">
                    <span className="font-mono text-[9px] text-[#99948a]">{number} / NOTE</span>
                    <h3 className="mt-7 font-sans text-lg tracking-tight">{title}</h3>
                    <p className="mt-2 text-xs leading-5 text-[#6d6962]">{copy}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between md:px-8 md:py-20">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[.15em] text-[#77736b]">Whenever you’re ready</span>
          <h2 className="mt-3 font-sans text-4xl font-medium leading-none tracking-[-.075em] md:text-5xl">The first step is just hello.</h2>
        </div>
        <a className={buttonDark} href={`mailto:${emailAddress}`}>Email Craftline <i aria-hidden="true" className="ph-arrow-up-right text-base" /></a>
      </section>
    </main>
  )
}
