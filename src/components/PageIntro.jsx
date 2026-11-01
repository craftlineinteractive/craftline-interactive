export default function PageIntro({ label, title, description, tint = false }) {
  return (
    <section className={`${tint ? 'bg-[#f0eee6]' : 'bg-[#f8f6f0]'} border-b border-[#dfdcd3]`}>
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <span className="font-mono text-[10px] uppercase tracking-[.15em] text-[#77736b]">{label}</span>
        <h1 className="mt-5 font-sans text-[clamp(3.75rem,9vw,6.25rem)] font-medium leading-[.9] tracking-[-.09em]">{title}</h1>
        {description && <p className="mt-6 max-w-xl text-sm leading-7 text-[#6b675f]">{description}</p>}
      </div>
    </section>
  )
}
