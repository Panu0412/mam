import { useMemo, useState } from 'react'
import products from './products'
import './BestSellerSection.css'

function BestSellerSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalProducts = products.length

  const goToPrevious = () => {
    setCurrentIndex((current) => (current - 1 + totalProducts) % totalProducts)
  }

  const goToNext = () => {
    setCurrentIndex((current) => (current + 1) % totalProducts)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const trackStyle = useMemo(
    () => ({
      transform: `translateX(-${currentIndex * 100}%)`,
    }),
    [currentIndex],
  )

  const currentProduct = products[currentIndex]

  return (
    <section className="best-seller-section" aria-labelledby="best-seller-title">
      <div className="best-seller-left">
        <h2 id="best-seller-title" className="best-seller-title">
          Best
          <br />
          Seller
        </h2>
      </div>

      <div className="best-seller-right">
        <div className="carousel-frame">
          <div className="carousel-shell">
            <button
              type="button"
              className="carousel-arrow"
              onClick={goToPrevious}
              aria-label="Sản phẩm trước"
            >
              <span aria-hidden="true">←</span>
            </button>

            <div className="carousel-viewport">
              <div className="carousel-track" style={trackStyle}>
                {products.map((product) => (
                  <article key={product.id} className="carousel-slide">
                    <div className="product-card">
                      <div className="product-visual">
                        <img className="product-image" src={product.image} alt={product.alt} />
                      </div>
                      <div className="product-content">
                        <p className="product-label">Mắm đặc sản 3 miền</p>
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-price">{product.price}</p>
                        <p className="product-description">{product.description}</p>
                        <a className="product-button" href="#product-detail">
                          Xem chi tiết
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="carousel-arrow"
              onClick={goToNext}
              aria-label="Sản phẩm tiếp theo"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>

          <div className="carousel-dots" aria-label="Chọn sản phẩm">
            {products.map((product, index) => (
              <button
                key={product.id}
                type="button"
                className={`carousel-dot ${index === currentIndex ? 'is-active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Đi đến sản phẩm ${index + 1}`}
                aria-pressed={index === currentIndex}
              />
            ))}
          </div>

          <p className="carousel-counter" aria-live="polite">
            {currentIndex + 1}/{totalProducts} - {currentProduct.name}
          </p>
        </div>
      </div>
    </section>
  )
}

export default BestSellerSection
