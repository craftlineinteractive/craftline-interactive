import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProductDetails from './pages/ProductDetails'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Products from './pages/Products'
import TermsOfUse from './pages/TermsOfUse'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Products />} path="/products" />
          <Route element={<Navigate replace to="/products" />} path="/apps-games" />
          <Route element={<PrivacyPolicy expectedKind="App" />} path="/app/:slug/privacy-policy" />
          <Route element={<TermsOfUse expectedKind="App" />} path="/app/:slug/terms-of-use" />
          <Route element={<ProductDetails expectedKind="App" />} path="/app/:slug" />
          <Route element={<PrivacyPolicy expectedKind="Game" />} path="/game/:slug/privacy-policy" />
          <Route element={<TermsOfUse expectedKind="Game" />} path="/game/:slug/terms-of-use" />
          <Route element={<ProductDetails expectedKind="Game" />} path="/game/:slug" />
          <Route element={<NotFound />} path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
