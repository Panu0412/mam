import { useEffect, useState } from 'react'
import './OtherProductsCarousel.css'

import bacBo from '../../assets/section-Bestseller/Bac_Bo/mam_tep.jpeg'
import bacBo2 from '../../assets/section-Bestseller/Bac_Bo/Nguyen_Lieu/nguyen_lieu_1.jpg'
import namBo from '../../assets/section-Bestseller/Nam_Bo/mam-ca-linh.jpg'
import namBo2 from '../../assets/section-Bestseller/Nam_Bo/Nguyen_Lieu/nguyen_lieu_2.jpg'
import trungBo from '../../assets/section-Bestseller/Trung_Bo/thit-kho-mam-ruoc.jpg'
import trungBo2 from '../../assets/section-Bestseller/Trung_Bo/Nguyen_Lieu/nguyen_lieu_3.jpg'

const products = [
  { id: 1, name: 'Mắm Bắc Bộ', price: 'Dòng đặc trưng', image: bacBo, description: 'Mắm đặc trưng miền Bắc, vị đậm và mộc mạc.' },
  { id: 2, name: 'Mắm Tép Bắc Bộ', price: 'Dòng đặc trưng', image: bacBo2, description: 'Gợi ý món mắm dân dã, hợp bữa cơm gia đình.' },
  { id: 3, name: 'Mắm Cá Linh', price: 'Dòng đặc trưng', image: namBo, description: 'Hương vị Nam Bộ, thơm và dễ ăn.' },
  { id: 4, name: 'Mắm Nguyên Liệu Nam', price: 'Dòng đặc trưng', image: namBo2, description: 'Ảnh demo cho bộ sản phẩm miền Nam.' },
  { id: 5, name: 'Mắm Trung Bộ', price: 'Dòng đặc trưng', image: trungBo, description: 'Vị đậm, hợp các món kho và chấm.' },
  { id: 6, name: 'Mắm Nguyên Liệu Trung', price: 'Dòng đặc trưng', image: trungBo2, description: 'Ảnh demo cho bộ sản phẩm miền Trung.' },
]

function OtherProductsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const maxIndex = products.length - 4

  const goNext = () => setCurrentIndex((current) => Math.min(current + 1, maxIndex))
  const goPrev = () => setCurrentIndex((current) => Math.max(current - 1, 0))

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentIndex((current) => (current >= maxIndex ? 0 : current + 1))
    }, 1500)

    return () => window.clearInterval(timer)
  }, [maxIndex])

  return (
    <section className="other-products" aria-labelledby="other-products-title">
      <div className="other-products__header">
        <div>
          <p className="other-products__eyebrow">Sản phẩm khác</p>
          <h2 className="other-products__title" id="other-products-title">
            Mắm gợi ý cho bạn
          </h2>
        </div>

        <div className="other-products__controls">
          <button type="button" className="other-products__arrow" onClick={goPrev} disabled={currentIndex === 0} aria-label="Sản phẩm trước">
            ←
          </button>
          <button type="button" className="other-products__arrow" onClick={goNext} disabled={currentIndex >= maxIndex} aria-label="Sản phẩm tiếp theo">
            →
          </button>
        </div>
      </div>

      <div className="other-products__viewport">
        <div
          className="other-products__track"
          style={{ transform: `translateX(calc(-${currentIndex * 25}% - ${currentIndex * 0.375}rem))` }}
        >
          {products.map((product) => (
            <article key={product.id} className="other-products__card">
              <div className="other-products__image-wrap">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="other-products__content">
                <p className="other-products__price">{product.price}</p>
                <h3 className="other-products__name">{product.name}</h3>
                <p className="other-products__description">{product.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OtherProductsCarousel
