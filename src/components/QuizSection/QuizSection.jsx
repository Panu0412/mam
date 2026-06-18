import { useEffect, useMemo, useState } from 'react'
import './QuizSection.css'

import bacBo from '../../assets/section-Bestseller/Bac_Bo/mam_tep.jpeg'
import namBo from '../../assets/section-Bestseller/Nam_Bo/mam-ca-linh.jpg'
import trungBo from '../../assets/section-Bestseller/Trung_Bo/thit-kho-mam-ruoc.jpg'

const quizRounds = [
  { top: 'Nước mắm truyền thống', bottom: 'Mắm chua ngọt' },
  { top: 'Vị đậm', bottom: 'Vị dịu' },
  { top: 'Ăn cùng cơm nóng', bottom: 'Ăn cùng rau luộc' },
  { top: 'Miền Bắc', bottom: 'Miền Nam' },
  { top: 'Quà gia đình', bottom: 'Quà biếu' },
]

const productSuggestions = [
  { name: 'Mắm Bắc Bộ', image: bacBo },
  { name: 'Mắm Cá Linh', image: namBo },
  { name: 'Mắm Trung Bộ', image: trungBo },
]

function QuizSection() {
  const [open, setOpen] = useState(false)
  const [roundIndex, setRoundIndex] = useState(0)
  const [selectedSide, setSelectedSide] = useState(null)
  const [phase, setPhase] = useState('idle')
  const [done, setDone] = useState(false)

  const currentRound = useMemo(() => quizRounds[roundIndex], [roundIndex])

  useEffect(() => {
    if (phase !== 'exiting' || !selectedSide) {
      return undefined
    }

    const timer = window.setTimeout(() => {
      if (roundIndex >= quizRounds.length - 1) {
        setDone(true)
        setSelectedSide(null)
        setPhase('idle')
        return
      }

      setRoundIndex((current) => current + 1)
      setSelectedSide(null)
      setPhase('entering')
      window.requestAnimationFrame(() => {
        setPhase('idle')
      })
    }, 520)

    return () => window.clearTimeout(timer)
  }, [phase, selectedSide, roundIndex])

  const handleStart = () => {
    setDone(false)
    setOpen(true)
    setRoundIndex(0)
    setSelectedSide(null)
    setPhase('entering')
    window.requestAnimationFrame(() => {
      setPhase('idle')
    })
  }

  const handleClose = () => {
    setOpen(false)
    setSelectedSide(null)
    setPhase('idle')
  }

  const handleChoose = (side) => {
    if (selectedSide || phase === 'exiting') {
      return
    }

    setSelectedSide(side)
    setPhase('exiting')
  }

  return (
    <section className="quiz-section" aria-labelledby="quiz-title" id="quiz">
      <div className="quiz-section__inner">
        <div className="quiz-hero">
          <h2 className="quiz-hero__title" id="quiz-title">
            Quizz
          </h2>
          <div className="quiz-hero__cta-wrap">
            <p className="quiz-hero__subtitle">Lựa chọn để tìm ra sự phù hợp với bản thân</p>
            <button type="button" className="quiz-hero__link" onClick={handleStart}>
              Tham gia câu hỏi
            </button>
          </div>
        </div>

        {open ? (
          <div className="quiz-modal" role="dialog" aria-modal="true" aria-label="Quizz">
            <button type="button" className="quiz-modal__close" onClick={handleClose} aria-label="Đóng">
              ×
            </button>

            <div className="quiz-modal__content">
              <div className="quiz-modal__header">
                <div className="quiz-modal__left">
                  <p className="quiz-modal__eyebrow">Quizz</p>
                  <p className="quiz-modal__summary">5 lượt lựa chọn nhanh để khám phá gu mắm của bạn.</p>
                </div>
                <div className="quiz-modal__right">
                  <span className="quiz-modal__count">0{roundIndex + 1}/05</span>
                </div>
              </div>

              {done ? (
                <div className="quiz-result">
                  <div className="quiz-result__header">
                    <p className="quiz-result__eyebrow">Gợi ý sản phẩm</p>
                    <h3 className="quiz-result__title">3 lựa chọn phù hợp cho bạn</h3>
                  </div>

                  <div className="quiz-result__grid">
                    {productSuggestions.map((product) => (
                      <article key={product.name} className="quiz-result__card">
                        <img src={product.image} alt={product.name} />
                        <h4>{product.name}</h4>
                      </article>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="quiz-modal__stage">
                  <button
                    type="button"
                    className={`quiz-option quiz-option--top ${phase === 'entering' ? 'is-enter-top' : ''} ${
                      phase === 'exiting' ? 'is-exit-right' : ''
                    }`}
                    onClick={() => handleChoose('top')}
                  >
                    <span>{currentRound.top}</span>
                  </button>

                  <button
                    type="button"
                    className={`quiz-option quiz-option--bottom ${phase === 'entering' ? 'is-enter-bottom' : ''} ${
                      phase === 'exiting' ? 'is-exit-left' : ''
                    }`}
                    onClick={() => handleChoose('bottom')}
                  >
                    <span>{currentRound.bottom}</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default QuizSection
