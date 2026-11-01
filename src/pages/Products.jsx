import { useState } from 'react'
import PageIntro from '../components/PageIntro'
import ProductCard from '../components/ProductCard'
import { products } from '../catalog'

export default function ProductsPage() {
  const [filter, setFilter] = useState('All')
  const filters = ['All', 'Apps', 'Games']
  const visibleProducts = products.filter((product) => filter === 'All' || product.kind === filter.slice(0, -1))
  const hasDemoConcepts = products.some((product) => product.status === 'Demo concept')

  return (
    <main>
      <PageIntro
        description="Explore Word Search: Brain Puzzle, a word-search game from Craftline Interactive."
        label="The Craftline collection"
        title={<>Things to tap.<br /><em className="text-[#f07158]">Worlds to wander.</em></>}
      />
      <section className="mx-auto max-w-6xl px-5 pb-20 pt-6 md:px-8 md:pb-28">
        <div className="flex min-h-14 items-center justify-between border-y border-[#dfdcd3] font-mono text-[9px] uppercase tracking-widest text-[#77736b]">
          <span>{String(visibleProducts.length).padStart(2, '0')} little ideas</span>
          <div aria-label="Filter products by type" className="flex gap-1" role="group">
            {filters.map((item) => (
              <button
                aria-pressed={filter === item}
                className={`rounded-full px-3 py-2 transition ${filter === item ? 'bg-[#24231f] text-white' : 'hover:bg-[#e8e4d9]'}`}
                key={item}
                onClick={() => setFilter(item)}
                type="button"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-3 pt-7 md:grid-cols-2">{visibleProducts.map((product) => <ProductCard key={product.slug} product={product} />)}</div>
        {hasDemoConcepts && <p className="mt-10 text-xs leading-6 text-[#817d74]">Demo concepts are fictional and not available to download. Their features, availability, and legal copy are placeholders.</p>}
      </section>
    </main>
  )
}
