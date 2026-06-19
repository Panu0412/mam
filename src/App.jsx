import Home from './pages/Home/Home.jsx'
import Product from './pages/Product/Product.jsx'
import SmoothScroll from './components/SmoothScroll.jsx'

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
  const isProductPage = pathname === '/product'

  return (
    <>
      <SmoothScroll />
      {isProductPage ? <Product /> : <Home />}
    </>
  )
}

export default App
