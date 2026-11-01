const palettes = {
  moon: { bg: 'bg-[#e8c8bc]', orb: 'bg-[#f3e8d6]', symbol: 'text-[#f47e62]', object: 'bg-[#ff755e]' },
  orbit: { bg: 'bg-[#c7d7f0]', orb: 'bg-[#f8d7a1]', symbol: 'text-[#fff3d4]', object: 'bg-[#ee789f]' },
  garden: { bg: 'bg-[#cdd7a3]', orb: 'bg-[#f2dcaa]', symbol: 'text-[#5e7750]', object: 'bg-[#ee8b63]' },
  tide: { bg: 'bg-[#9ec9cb]', orb: 'bg-[#e8daaf]', symbol: 'text-[#4a9ca3]', object: 'bg-[#ef906f]' },
}

export default function ProductArtwork({ product, compact = false }) {
  const palette = palettes[product.artwork] ?? palettes.moon

  return (
    <div
      aria-label={product.iconSrc ? undefined : `${product.name} illustrated artwork`}
      className={`relative isolate flex ${compact ? 'min-h-72' : 'min-h-87.5 md:min-h-110'} items-center justify-center overflow-hidden ${palette.bg}`}
      role={product.iconSrc ? undefined : 'img'}
    >
      {product.iconSrc ? (
        <img
          alt={`${product.name} app icon`}
          className="size-40 rounded-[26%] object-cover shadow-[0_20px_60px_rgba(57,48,41,.22)] md:size-52"
          src={product.iconSrc}
        />
      ) : (
        <>
          <span className={`absolute left-[-15%] top-[-22%] aspect-square w-[65%] rounded-full opacity-55 ${palette.orb}`} />
          <span className={`absolute bottom-[-45%] right-[-18%] aspect-square w-[85%] rounded-full opacity-30 ${palette.object}`} />
          <i aria-hidden="true" className="ph-asterisk absolute left-[17%] top-[17%] text-2xl text-[#24231f]" />
          <i aria-hidden="true" className="ph-star-four absolute bottom-[22%] right-[17%] text-xl text-[#24231f]" />
          <span className="absolute h-[42%] w-[75%] rotate-[-35deg] rounded-[50%] border border-[#24231f]/30" />
          <span className={`relative grid ${compact ? 'w-[48%]' : 'w-[54%]'} aspect-square place-items-center rounded-full border border-[#24231f]/20 text-[clamp(5rem,15vw,9rem)] shadow-[0_20px_60px_rgba(57,48,41,.16)] ${palette.orb} ${palette.symbol}`}>
            <i aria-hidden="true" className={`ph-${product.symbol} text-[.8em]`} />
          </span>
          <span className={`absolute right-[15%] top-[18%] grid size-14 rotate-12 place-items-center rounded-full text-3xl text-[#fff3d4] shadow-xl md:size-16 ${palette.object}`}>
            <i aria-hidden="true" className={`ph-${product.ornament ?? 'sparkle'}`} />
          </span>
          <span className="absolute bottom-4 left-4 font-mono text-[8px] tracking-[.14em] text-[#39352f]">{product.label}</span>
          <span className="absolute bottom-3 right-3 rounded-full border border-[#24231f]/40 bg-white/40 px-2.5 py-1.5 font-mono text-[7px] tracking-wider">
            {product.kind === 'Game' ? 'PLAY NICE' : 'MADE FOR YOU'}
          </span>
        </>
      )}
    </div>
  )
}
