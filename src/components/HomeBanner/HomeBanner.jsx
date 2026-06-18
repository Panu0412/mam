import './HomeBanner.css'

import bannerImage from '../../assets/banner.jpg'

function HomeBanner() {
  return (
    <section className="home-banner" aria-labelledby="home-banner-title">
      <div className="home-banner__visual" role="img" aria-label="Banner giới thiệu sản phẩm mắm">
        <img src={bannerImage} alt="Banner giới thiệu sản phẩm mắm" />
        <div className="home-banner__overlay">
          <h1 className="home-banner__title" id="home-banner-title">
            Hương mắm quê nhà, trọn vị bữa cơm Việt
          </h1>
          <a className="home-banner__button" href="#product">
            Shop
          </a>
        </div>
      </div>
    </section>
  )
}

export default HomeBanner
