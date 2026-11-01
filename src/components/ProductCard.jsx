import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getProductPath } from '../catalog'

const storeIconRequests = new Map()

function getStoreIconUrl(playStoreUrl) {
  if (!storeIconRequests.has(playStoreUrl)) {
    const request = (async () => {
      const listingUrl = new URL(playStoreUrl)
      if (listingUrl.protocol !== 'https:' || listingUrl.hostname !== 'play.google.com') {
        throw new Error('The app listing is not a valid Google Play URL.')
      }

      const apiUrl = new URL('https://api.microlink.io')
      apiUrl.searchParams.set('url', listingUrl.href)
      const response = await fetch(apiUrl)
      if (!response.ok) {
        throw new Error(`The icon lookup returned HTTP ${response.status}.`)
      }

      const result = await response.json()
      if (result.status !== 'success' || typeof result.data?.image?.url !== 'string') {
        throw new Error('The icon lookup did not return an app image.')
      }

      const imageUrl = new URL(result.data.image.url)
      if (imageUrl.protocol !== 'https:' || imageUrl.hostname !== 'play-lh.googleusercontent.com') {
        throw new Error('The icon lookup returned an unexpected image URL.')
      }

      return imageUrl.href
    })().catch((error) => {
      storeIconRequests.delete(playStoreUrl)
      throw error
    })

    storeIconRequests.set(playStoreUrl, request)
  }

  return storeIconRequests.get(playStoreUrl)
}

export default function ProductCard({ product }) {
  const [storeIconUrl, setStoreIconUrl] = useState(null)
  const [iconFailed, setIconFailed] = useState(false)
  const iconPalettes = {
    moon: 'bg-[#e8c8bc] text-[#f47e62]',
    orbit: 'bg-[#c7d7f0] text-[#dd795e]',
    garden: 'bg-[#cdd7a3] text-[#5e7750]',
    tide: 'bg-[#9ec9cb] text-[#4a9ca3]',
  }

  useEffect(() => {
    if (product.iconSrc || !product.playStoreUrl) return undefined

    let active = true
    getStoreIconUrl(product.playStoreUrl)
      .then((url) => {
        if (active) setStoreIconUrl(url)
      })
      .catch((error) => {
        if (active) console.warn(`Could not load the Google Play icon for ${product.name}.`, error)
      })

    return () => {
      active = false
    }
  }, [product.iconSrc, product.name, product.playStoreUrl])

  const iconUrl = iconFailed ? null : product.iconSrc ?? storeIconUrl
  const iconPalette = iconPalettes[product.artwork] ?? iconPalettes.moon

  return (
    <article className="group flex min-w-0 items-center gap-4 rounded-2xl border border-[#dfdcd3] bg-white/40 p-3 transition hover:border-[#c5c0b4] hover:bg-white/70 sm:gap-5 sm:p-4">
      <Link
        aria-label={`View ${product.name} ${product.kind.toLowerCase()} details`}
        className="size-18 shrink-0 overflow-hidden rounded-xl ring-1 ring-inset ring-[#24231f]/10 transition group-hover:scale-[1.03] sm:size-20"
        to={getProductPath(product)}
      >
        {iconUrl ? (
          <img
            alt={`${product.name} app icon`}
            className="size-full object-cover"
            loading="lazy"
            onError={() => {
              console.warn(`Could not display the app icon for ${product.name}.`)
              setIconFailed(true)
            }}
            src={iconUrl}
          />
        ) : (
          <span className={`grid size-full place-items-center text-4xl ${iconPalette}`}>
            <i aria-hidden="true" className={`ph-${product.symbol}`} />
          </span>
        )}
      </Link>
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="font-mono text-[9px] uppercase tracking-[.13em] text-[#77736b]">{product.kind}</span>
          <span aria-hidden="true" className="text-[#aaa59a]">·</span>
          <span className="font-mono text-[9px] text-[#88847b]">{product.category}</span>
        </div>
        <Link className="block truncate font-sans text-lg tracking-tight transition group-hover:text-[#ed6e57] sm:text-xl" to={getProductPath(product)}>
          {product.name}
        </Link>
        <p className="mt-0.5 line-clamp-2 text-xs leading-5 text-[#6d6962]">{product.tagline}</p>
        {product.playStoreUrl && (
          <a
            className="mt-2 inline-flex items-center gap-1.5 text-[10px] font-semibold text-[#57544d] hover:text-[#ed6e57]"
            href={product.playStoreUrl}
            rel="noreferrer"
            target="_blank"
          >
            <i aria-hidden="true" className="ph-google-play-logo text-sm" />
            Google Play
          </a>
        )}
      </div>
      <Link aria-label={`View ${product.name} details`} className="grid size-9 shrink-0 place-items-center rounded-full text-[#77736b] transition hover:bg-[#d7ed75] hover:text-[#24231f]" to={getProductPath(product)}>
        <i aria-hidden="true" className="ph-arrow-up-right text-base" />
      </Link>
    </article>
  )
}
