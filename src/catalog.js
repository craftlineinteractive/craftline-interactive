import wordSearch from './products/games/word-search'

export const apps = []
export const games = [wordSearch]
export const products = [...apps, ...games]

export function getProductPath(product, page = '') {
  const collection = product.kind === 'Game' ? 'game' : 'app'
  return `/${collection}/${product.slug}/${page ? `${page}/` : ''}`
}
