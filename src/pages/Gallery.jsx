import { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import styles from './Gallery.module.css'

export default function Gallery() {
  const [categories, setCategories] = useState([])
  const [status, setStatus] = useState('loading') // loading | ready | error
  const [activeCategory, setActiveCategory] = useState(null)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  useEffect(() => {
    document.title = 'Hanika TSS | School Gallery'
  }, [])

  useEffect(() => {
    fetch('/gallery.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load gallery data')
        return res.json()
      })
      .then((data) => {
        setCategories(data)
        setStatus('ready')
      })
      .catch(() => setStatus('error'))
  }, [])

  const activeImages = activeCategory ? activeCategory.images : []

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowRight') showNext()
      if (e.key === 'ArrowLeft') showPrev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxIndex, activeCategory])

  const openCategory = (cat) => {
    setActiveCategory(cat)
    setLightboxIndex(null)
  }

  const backToCategories = () => {
    setActiveCategory(null)
    setLightboxIndex(null)
  }

  const showNext = () => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % activeImages.length))
  }

  const showPrev = () => {
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + activeImages.length) % activeImages.length,
    )
  }

  return (
    <div>
      <div className={styles.head}>
        <Nav showLogo />
        <div className={styles.content}>
          <div className={styles.title}>
            School Memories &amp; <span>Success</span> Stories
          </div>
          <div className={styles.subTitle}>
            Hanika TSS <span>| gallery</span>
          </div>
        </div>
      </div>

      {status === 'loading' && <div className={styles.statusMsg}>Loading gallery…</div>}
      {status === 'error' && (
        <div className={styles.statusMsg}>
          Couldn't load the gallery right now — please try again shortly.
        </div>
      )}

      {status === 'ready' && !activeCategory && (
        <div className={styles.categoryGrid}>
          {categories.map((cat) => (
            <div
              className={styles.categoryCard}
              key={cat.key}
              onClick={() => openCategory(cat)}
            >
              <img src={cat.images[0].file} className={styles.bg} alt={cat.title} loading="lazy" />
              <div className={styles.categoryOverlay}>
                <div className={styles.categoryTitle}>{cat.title}</div>
                <div className={styles.categoryCount}>
                  {cat.images.length} photo{cat.images.length > 1 ? 's' : ''}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {status === 'ready' && activeCategory && (
        <div className={styles.categoryView}>
          <div className={styles.backRow}>
            <button className={styles.backButton} onClick={backToCategories}>
              <i className="fas fa-arrow-left"></i> all categories
            </button>
            <div className={styles.categoryHeading}>{activeCategory.title}</div>
          </div>
          <div className={styles.gallery}>
            {activeCategory.images.map((item, i) => (
              <div
                className={styles.card}
                key={`${activeCategory.key}-${i}`}
                onClick={() => setLightboxIndex(i)}
              >
                <img src={item.file} className={styles.bg} alt={item.caption} loading="lazy" />
                <div className={styles.desc}>
                  <div className={styles.text}>
                    <div className={styles.big}>{item.caption}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {lightboxIndex !== null && activeCategory && (
        <div className={styles.lightbox} onClick={() => setLightboxIndex(null)}>
          <button
            className={styles.lightboxClose}
            onClick={() => setLightboxIndex(null)}
            aria-label="Close"
          >
            <i className="fas fa-xmark"></i>
          </button>

          <button
            className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
            onClick={(e) => {
              e.stopPropagation()
              showPrev()
            }}
            aria-label="Previous image"
          >
            <i className="fas fa-angle-left"></i>
          </button>

          <div className={styles.lightboxImageWrap} onClick={(e) => e.stopPropagation()}>
            <img
              src={activeImages[lightboxIndex].file}
              alt={activeImages[lightboxIndex].caption}
              className={styles.lightboxImage}
            />
            <div className={styles.lightboxCaption}>
              {activeImages[lightboxIndex].caption}
              <span className={styles.lightboxCounter}>
                {lightboxIndex + 1} / {activeImages.length}
              </span>
            </div>
          </div>

          <button
            className={`${styles.lightboxNav} ${styles.lightboxNext}`}
            onClick={(e) => {
              e.stopPropagation()
              showNext()
            }}
            aria-label="Next image"
          >
            <i className="fas fa-angle-right"></i>
          </button>
        </div>
      )}

      <div className={styles.badge}>
        <i className="fas fa-camera-retro"></i>
        <div className={styles.right}>
          <div className={styles.badgeTitle}>love these moments?</div>
          <div className={styles.badgeSubTitle}>
            Follow Hanika TSS on different social medias to keep up with the
            updates, ceremonies, achievements, student life and TVET activities.
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
