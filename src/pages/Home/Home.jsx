import Header from '../../components/Header/Header.jsx'
import HomeBanner from '../../components/HomeBanner/HomeBanner.jsx'
import BestSellerSection from '../../components/BestSellerSection/BestSellerSection.jsx'
import MiniCombo from '../../components/MiniCombo/MiniCombo.jsx'
import OtherProductsCarousel from '../../components/OtherProductsCarousel/OtherProductsCarousel.jsx'
import QuizSection from '../../components/QuizSection/QuizSection.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import './Home.css'

function Home() {
  return (
    <div className="home-page">
      <Header />
      <HomeBanner />
      <BestSellerSection />
      <MiniCombo />
      <OtherProductsCarousel />
      <QuizSection />
      <Footer />
    </div>
  )
}

export default Home
