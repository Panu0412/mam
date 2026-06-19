import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './ParallaxSection.css'

gsap.registerPlugin(ScrollTrigger)

function ParallaxSection({ textItems, imageItems }) {
  const sectionRef = useRef(null)
  const imageTrackRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current
      const imageTrack = imageTrackRef.current

      if (!section || !imageTrack) return

      const mm = gsap.matchMedia()

      mm.add('(min-width: 901px)', () => {
        const imageMoveDistance = () => {
          const frame = imageTrack.querySelector('.parallax-section__image-frame')
          const frameHeight = frame?.offsetHeight || 1

          return Math.max(imageTrack.scrollHeight - frameHeight, 0)
        }

        const syncSectionHeight = () => {
          const minimumHeight = imageTrack.scrollHeight + window.innerHeight * 0.2
          section.style.minHeight = `${Math.max(minimumHeight, section.scrollHeight)}px`
        }

        syncSectionHeight()

        gsap.fromTo(
          imageTrack,
          { y: () => -imageMoveDistance() },
          {
            y: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top top+=112',
              end: () => `+=${Math.max(imageMoveDistance(), 1800)}`,
              scrub: true,
              invalidateOnRefresh: true,
              onRefresh: syncSectionHeight,
            },
          },
        )
      })

      mm.add('(max-width: 900px)', () => {
        gsap.set(imageTrack, { clearProps: 'transform' })
      })

      return () => mm.revert()
    }, sectionRef)

    ScrollTrigger.refresh()

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="parallax-section">
      <div className="parallax-section__inner">
        <div className="parallax-section__column parallax-section__column--text">
          <div className="parallax-section__text-track">
            {textItems.map((item) => (
              <article key={item.id} className="parallax-section__text-block">
                <p className="parallax-section__eyebrow">{item.kicker}</p>
                <h2 className="parallax-section__copy">{item.body}</h2>
              </article>
            ))}
          </div>
        </div>

        <div className="parallax-section__column parallax-section__column--image">
          <div ref={imageTrackRef} className="parallax-section__image-track">
            {imageItems.map((item) => (
              <figure key={item.id} className="parallax-section__image-frame">
                <img className="parallax-section__image" src={item.src} alt={item.alt} />
                <figcaption className="parallax-section__image-number">{item.number}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ParallaxSection
