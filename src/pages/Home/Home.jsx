import Header from '../../components/Header/Header.jsx'
import BestSellerSection from '../../components/BestSellerSection/BestSellerSection.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import './Home.css'

function Home() {
  return (
    <div className="home-page">
      <Header />
      <BestSellerSection />
      <Footer />
    </div>
  )
}

export default Home
