import { Link, useParams } from 'react-router-dom'
import ProductArtwork from '../components/ProductArtwork'
import { getProductPath, products } from '../catalog'
import NotFoundPage from './NotFound'

export default function ProductDetailsPage({ expectedKind }) {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug && item.kind === expectedKind)
  if (!product) return <NotFoundPage />
  const legalPages = [
    ...(product.privacyPolicy?.length ? [{ path: 'privacy-policy', title: 'Privacy Policy', label: '01 / PRIVACY' }] : []),
    ...(product.termsOfUse?.length ? [{ path: 'terms-of-use', title: 'Terms of Use', label: '02 / TERMS' }] : []),
  ]

  return (
    <main>
      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-[1fr_.9fr] md:items-center md:gap-16 md:px-8 md:py-16">
        <div>
          <Link className="mb-9 inline-flex text-xs text-[#747067] hover:text-[#ed6e57]" to="/products">← Back to apps &amp; games</Link>
          <div className="flex flex-wrap items-center gap-3"><span className="font-mono text-[10px] uppercase tracking-[.15em] text-[#77736b]">{product.kind} · {product.category}</span><span className="border border-[#c8c2b5] px-2 py-1 font-mono text-[8px] uppercase tracking-wider text-[#77736b]">{product.status}</span></div>
          <h1 className="mt-5 font-sans text-6xl font-medium tracking-[-.09em] md:text-8xl">{product.name}<span className="text-[#f07158]">.</span></h1>
          <p className="mt-2 font-serif text-xl">{product.tagline}</p>
          <p className="mt-5 max-w-lg text-sm leading-7 text-[#6d6961]">{product.description}</p>
          <div className="mt-7 flex flex-wrap items-center gap-2"><span className="mr-2 font-mono text-[10px] uppercase tracking-[.15em] text-[#77736b]">Made for</span>{product.platforms.map((platform) => <span className="rounded-full border border-[#dfdcd3] px-3 py-1.5 text-[10px] text-[#625e57]" key={platform}>{platform}</span>)}</div>
          {product.playStoreUrl && <a className="mt-7 inline-flex min-h-12 items-center gap-3 bg-[#24231f] px-5 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#ef7058]" href={product.playStoreUrl} rel="noreferrer" target="_blank"><i aria-hidden="true" className="ph-google-play-logo text-lg" />Get it on Google Play <i aria-hidden="true" className="ph-arrow-up-right text-base" /></a>}
        </div>
        <ProductArtwork product={product} />
      </section>

      <section className="bg-[#efede5]">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 py-14 md:grid-cols-2 md:gap-16 md:px-8 md:py-20">
          <div><span className="font-mono text-[10px] uppercase tracking-[.15em] text-[#77736b]">The little idea</span><h2 className="mt-4 max-w-lg font-sans text-4xl font-medium leading-tight tracking-[-.07em] md:text-5xl">{product.name} is all about <em className="text-[#ef7058]">{product.category.toLowerCase()}.</em></h2></div>
          <div className="space-y-4 text-sm leading-7 text-[#6d6962]"><p>{product.description}</p>{product.status === 'Demo concept' && <p>This is a portfolio concept created for the Craftline Interactive website. It is not currently available to download. Product details and platform information are illustrative.</p>}</div>
        </div>
      </section>

      {product.features?.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="mb-9 max-w-2xl">
            <span className="font-mono text-[10px] uppercase tracking-[.15em] text-[#77736b]">A little more to discover</span>
            <h2 className="mt-4 font-sans text-4xl font-medium leading-[.98] tracking-[-.075em] md:text-6xl">Find a word.<br /><em className="text-[#ef7058]">Learn something new.</em></h2>
            <p className="mt-4 text-sm leading-7 text-[#6d6962]">Explore the features that make each puzzle a chance to discover, learn, and play.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map((feature, index) => (
              <article className="min-h-48 border border-[#dfdcd3] p-5 md:p-6" key={feature.title}>
                <span className="font-mono text-[10px] text-[#ed755c]">{String(index + 1).padStart(2, '0')} / FEATURE</span>
                <h3 className="mt-8 font-sans text-xl tracking-tight">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#6d6962]">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {legalPages.length > 0 && (
        <section className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-2 md:items-center md:gap-16 md:px-8 md:py-24">
          <div><span className="font-mono text-[10px] uppercase tracking-[.15em] text-[#77736b]">A note before you explore</span><h2 className="mt-4 max-w-lg font-sans text-4xl font-medium leading-tight tracking-[-.07em] md:text-5xl">Product details.<br /><em className="text-[#ef7058]">In one place.</em></h2><p className="mt-5 max-w-md text-sm leading-7 text-[#6d6962]">{product.status === 'Demo concept' ? 'Each concept has its own product-specific legal drafts. These are separate from any policy for the Craftline Interactive website.' : 'Read the available product-specific policies below. They are separate from any policy for the Craftline Interactive website.'}</p></div>
          <div className="divide-y divide-[#dfdcd3] border-y border-[#dfdcd3]">
            {legalPages.map((page) => (
              <Link className="flex min-h-20 items-center justify-between gap-4 transition hover:px-2" key={page.path} to={getProductPath(product, page.path)}>
                <span><small className="block font-mono text-[8px] tracking-widest text-[#77736b]">{page.label}</small><strong className="mt-1 block font-serif text-lg font-normal">{product.name} {page.title}</strong></span>
                <i aria-hidden="true" className="ph-arrow-up-right text-base" />
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
