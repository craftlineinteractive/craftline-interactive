import { Link } from 'react-router-dom'

export default function SectionHeading({ label, title, copy, link, linkLabel }) {
  return (
    <div className="mb-9 flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
      <div>
        <span className="font-mono text-[10px] uppercase tracking-[.15em] text-[#77736b]">{label}</span>
        <h2 className="mt-3 font-sans text-4xl font-medium leading-[.98] tracking-[-.07em] md:text-6xl">{title}</h2>
        {copy && <p className="mt-3 max-w-md text-sm leading-7 text-[#6d6962]">{copy}</p>}
      </div>
      {link && <Link className="inline-flex items-center gap-3 border-b border-[#24231f] pb-2 text-xs font-semibold" to={link}>{linkLabel}<i aria-hidden="true" className="ph-arrow-right" /></Link>}
    </div>
  )
}
