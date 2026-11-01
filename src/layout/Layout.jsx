import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { products } from '../catalog'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function PageTitle() {
  const location = useLocation()

  useEffect(() => {
    const productSlug = location.pathname.match(/^\/(?:app|game)\/([^/]+)/)?.[1]
    const product = products.find((item) => item.slug === productSlug)
    const isPrivacyPage = location.pathname.endsWith('/privacy-policy')
    const isTermsPage = location.pathname.endsWith('/terms-of-use')
    const legalSections = isPrivacyPage ? product?.privacyPolicy : product?.termsOfUse
    const title = isPrivacyPage || isTermsPage
      ? legalSections?.length
        ? `${product.name} ${isPrivacyPage ? 'Privacy Policy' : 'Terms of Use'}`
        : 'Page not found'
      : location.pathname === '/about'
          ? 'About'
          : location.pathname === '/contact'
            ? 'Contact'
            : location.pathname === '/products'
              ? 'Apps & Games'
              : product?.name ?? 'Home'
    document.title = `${title} — Craftline Interactive`
  }, [location.pathname])

  return null
}

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname])

  return (
    <>
      <PageTitle />
      <Navbar />
      <div className="page-enter" key={location.pathname}>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
