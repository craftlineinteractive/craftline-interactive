import { Link, useParams } from 'react-router-dom'
import { getProductPath, products } from '../catalog'
import NotFoundPage from './NotFound'

export default function LegalPage({ type, expectedKind }) {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug && item.kind === expectedKind)
  if (!product) return <NotFoundPage />

  const isPrivacy = type === 'privacy'
  const title = isPrivacy ? 'Privacy Policy' : 'Terms of Use'
  const sections = isPrivacy ? product.privacyPolicy : product.termsOfUse
  const otherPolicy = isPrivacy ? 'terms-of-use' : 'privacy-policy'
  const otherPolicySections = isPrivacy ? product.termsOfUse : product.privacyPolicy
  const lastUpdated = isPrivacy ? product.privacyPolicyLastUpdated : product.termsOfUseLastUpdated
  const introduction = isPrivacy ? product.privacyPolicyIntro : product.termsOfUseIntro
  if (!sections?.length) return <NotFoundPage />
  const isDraft = product.status === 'Demo concept'

  return (
    <main>
      <section className="border-b border-[#dfdcd3] bg-[#f0eee6]">
        <div className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-16">
          <Link className="mb-7 inline-flex text-xs text-[#747067] hover:text-[#ed6e57]" to={getProductPath(product)}>← Back to {product.name}</Link>
          <span className="block font-mono text-[10px] uppercase tracking-[.15em] text-[#77736b]">{product.name} · {product.kind} · Product policy</span>
          <h1 className="mt-3 font-sans text-5xl font-medium tracking-[-.09em] md:text-7xl">{title}<span className="text-[#ef7058]">.</span></h1>
          {lastUpdated && <p className="mt-3 font-mono text-[9px] uppercase tracking-wider text-[#77736b]">Last updated: {lastUpdated}</p>}
          {isDraft && (
            <>
              <p className="mt-3 font-mono text-[9px] uppercase tracking-wider text-[#77736b]">Sample draft · Review and replace before product release</p>
              <div className="mt-7 flex max-w-3xl gap-3 border border-[#d5cfbf] bg-white/40 p-4 text-xs leading-6 text-[#615e56]"><i aria-hidden="true" className="ph-warning text-lg text-[#ed755c]" /><p><strong className="text-[#24231f]">Demo legal copy.</strong> This page is for the {product.name} concept only, not for the Craftline Interactive website. It is a starter draft, not legal advice. Verify product behavior, contact details, and applicable law before publishing.</p></div>
            </>
          )}
        </div>
      </section>
      <div className="mx-auto grid max-w-6xl gap-9 px-5 py-10 md:grid-cols-[220px_1fr] md:gap-16 md:px-8 md:py-14">
        <aside className="self-start md:sticky md:top-6">
          <span className="mb-3 block font-mono text-[10px] uppercase tracking-[.15em] text-[#77736b]">On this page</span>
          <nav aria-label={`${title} sections`} className="grid grid-cols-2 border-t border-[#dfdcd3] md:grid-cols-1">
            {sections.map((section, index) => <a className="grid grid-cols-[22px_1fr] gap-2 border-b border-[#dfdcd3] py-3 font-mono text-[8px] leading-5 text-[#77736b] hover:text-[#e56c55]" href={`#legal-${index}`} key={section.title}>{String(index + 1).padStart(2, '0')}<span className="font-sans text-[10px] text-[#514e47]">{section.title}</span></a>)}
          </nav>
          {otherPolicySections?.length > 0 && (
            <div className="mt-4 grid gap-2 bg-[#efede5] p-4">
              <span className="font-mono text-[8px] uppercase tracking-widest text-[#77736b]">For {product.name}</span>
              <Link className="flex items-center justify-between gap-2 text-[10px] font-semibold" to={getProductPath(product, otherPolicy)}>Read {isPrivacy ? 'Terms of Use' : 'Privacy Policy'} <i aria-hidden="true" className="ph-arrow-up-right" /></Link>
            </div>
          )}
        </aside>
        <article className="max-w-3xl">
          {introduction?.map((paragraph) => <p className="mb-4 font-serif text-lg leading-7" key={paragraph}>{paragraph}</p>)}
          {isDraft && <p className="mb-8 font-serif text-lg leading-7">{isPrivacy ? `This draft is specifically for ${product.name}. It must be completed to reflect the real product before release.` : `These draft terms are specifically for ${product.name}. They must be reviewed and completed before release.`}</p>}
          {sections.map((section, index) => (
            <section className="relative scroll-mt-6 border-t border-[#dfdcd3] py-6 pl-9" id={`legal-${index}`} key={section.title}>
              <span className="absolute left-0 top-7 font-mono text-[9px] text-[#ee745c]">{String(index + 1).padStart(2, '0')}</span>
              <h2 className="font-serif text-xl">{section.title}</h2>
              {section.body && <p className="mt-2 text-xs leading-7 text-[#6d6962]">{section.body}</p>}
              {section.paragraphs?.map((paragraph) => <p className="mt-2 text-xs leading-7 text-[#6d6962]" key={paragraph}>{paragraph}</p>)}
              {section.items?.length > 0 && <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-6 text-[#6d6962]">{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
              {section.subsections?.map((subsection) => (
                <div className="mt-6 border-l border-[#dfdcd3] pl-4 sm:pl-5" key={subsection.title}>
                  <h3 className="font-sans text-sm font-medium">{subsection.title}</h3>
                  {subsection.paragraphs?.map((paragraph) => <p className="mt-2 text-xs leading-7 text-[#6d6962]" key={paragraph}>{paragraph}</p>)}
                  {subsection.items?.length > 0 && <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-6 text-[#6d6962]">{subsection.items.map((item) => <li key={item}>{item}</li>)}</ul>}
                  {subsection.closingParagraphs?.map((paragraph) => <p className="mt-2 text-xs leading-7 text-[#6d6962]" key={paragraph}>{paragraph}</p>)}
                </div>
              ))}
              {section.closingParagraphs?.map((paragraph) => <p className="mt-2 text-xs leading-7 text-[#6d6962]" key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
          <div className="flex flex-wrap justify-between gap-4 border-t border-[#dfdcd3] pt-6">
            <Link className="border-b border-[#dfdcd3] pb-2 text-xs" to={getProductPath(product)}>← Back to {product.name}</Link>
            <Link className="inline-flex items-center gap-2 border-b border-[#dfdcd3] pb-2 text-xs" to="/products">Browse all products <i aria-hidden="true" className="ph-arrow-right" /></Link>
          </div>
        </article>
      </div>
    </main>
  )
}
