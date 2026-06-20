import Home from './pages/Home/Home.jsx'
import Product from './pages/Product/Product.jsx'
import About from './pages/About/About.jsx'
import Special from './pages/Special/Special.jsx'
import Blog from './pages/Blog/Blog.jsx'
import Contact from './pages/Contact/Contact.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'
import SmoothScroll from './components/SmoothScroll.jsx'

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/'

  if (pathname === '/about') {
    return (
      <>
        <SmoothScroll />
        <About />
      </>
    )
  }

  if (pathname === '/product') {
    return (
      <>
        <SmoothScroll />
        <Product />
      </>
    )
  }

  if (pathname === '/special') {
    return (
      <>
        <SmoothScroll />
        <Special />
      </>
    )
  }

  if (pathname === '/blog') {
    return (
      <>
        <SmoothScroll />
        <Blog />
      </>
    )
  }

  if (pathname === '/404') {
    return (
      <>
        <SmoothScroll />
        <NotFound />
      </>
    )
  }

  if (pathname === '/contact') {
    return (
      <>
        <SmoothScroll />
        <Contact />
      </>
    )
  }

  if (pathname !== '/') {
    return (
      <>
        <SmoothScroll />
        <NotFound />
      </>
    )
  }

  return (
    <>
      <SmoothScroll />
      <Home />
    </>
  )
}

export default App
