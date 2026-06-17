import { useEffect, useMemo, useRef, useState } from 'react'
import products from './products'
import './BestSellerSection.css'

const ingredientLayouts = [
  {
    className: 'ingredient-overlay-1',
    style: { top: '22%', left: '3%', width: 'clamp(108px, 13vw, 150px)', '--ingredient-transform': 'rotate(-10deg)' },
  },
  {
    className: 'ingredient-overlay-2',
    style: { top: '60%', left: '16%', width: 'clamp(118px, 14vw, 170px)', '--ingredient-transform': 'rotate(8deg)' },
  },
  {
    className: 'ingredient-overlay-3',
    style: { top: '8%', left: '40%', width: 'clamp(104px, 12vw, 148px)', '--ingredient-transform': 'rotate(-5deg)' },
  },
  {
    className: 'ingredient-overlay-4',
    style: { top: '10%', right: '17%', width: 'clamp(108px, 13vw, 154px)', '--ingredient-transform': 'rotate(9deg)' },
  },
  {
    className: 'ingredient-overlay-5',
    style: { top: '58%', right: '12%', width: 'clamp(126px, 15vw, 184px)', '--ingredient-transform': 'rotate(-7deg)' },
  },
  {
    className: 'ingredient-overlay-6',
    style: { top: '38%', right: '34%', width: 'clamp(104px, 12vw, 148px)', '--ingredient-transform': 'rotate(6deg)' },
  },
]

function BestSellerSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hoveredProductId, setHoveredProductId] = useState(null)
  const [visibleIngredientCount, setVisibleIngredientCount] = useState(0)
  const animationTimers = useRef([])
  const totalProducts = products.length

  const clearAnimationTimers = () => {
    animationTimers.current.forEach((timer) => window.clearTimeout(timer))
    animationTimers.current = []
  }

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
  const hoveredIngredients = hoveredProductId === currentProduct.id ? currentProduct.ingredients : null

  useEffect(() => {
    return clearAnimationTimers
  }, [])

  const revealIngredients = (product) => {
    if (!product.ingredients?.length) {
      return
    }

    clearAnimationTimers()
    setHoveredProductId(product.id)
    setVisibleIngredientCount(0)

    product.ingredients.forEach((_, index) => {
      const timer = window.setTimeout(() => {
        setVisibleIngredientCount(index + 1)
      }, 40 + index * 500)

      animationTimers.current.push(timer)
    })
  }

  const hideIngredients = (product) => {
    if (hoveredProductId !== product.id) {
      return
    }

    clearAnimationTimers()

    for (let count = visibleIngredientCount - 1; count >= 0; count -= 1) {
      const delay = (visibleIngredientCount - 1 - count) * 500
      const timer = window.setTimeout(() => {
        setVisibleIngredientCount(count)
      }, delay)

      animationTimers.current.push(timer)
    }

    const cleanupTimer = window.setTimeout(
      () => {
        setHoveredProductId(null)
      },
      Math.max(visibleIngredientCount, 1) * 500 + 260,
    )

    animationTimers.current.push(cleanupTimer)
  }

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
                      <div
                        className="product-visual"
                        onMouseLeave={() => hideIngredients(product)}
                        onMouseEnter={() => revealIngredients(product)}
                      >
                        <img className="product-image" src={product.image} alt={product.alt} />
                        {product.id === hoveredProductId && hoveredIngredients?.length
                          ? hoveredIngredients.map((ingredient, index) => (
                              <img
                                key={ingredient.src}
                                className={`ingredient-overlay ${ingredientLayouts[index % ingredientLayouts.length].className} ${
                                  index < visibleIngredientCount ? 'is-visible' : ''
                                }`}
                                style={ingredientLayouts[index % ingredientLayouts.length].style}
                                src={ingredient.src}
                                alt={ingredient.alt}
                              />
                            ))
                          : null}
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
