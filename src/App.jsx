import Home from './pages/Home/Home.jsx'
import Product from './pages/Product/Product.jsx'
import About from './pages/About/About.jsx'
import SmoothScroll from './components/SmoothScroll.jsx'

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
  const isAboutPage = pathname === '/about'
  const isProductPage = pathname === '/product'

  return (
    <>
      <SmoothScroll />
      {isAboutPage ? <About /> : isProductPage ? <Product /> : <Home />}
    </>
  )
}

export default App
