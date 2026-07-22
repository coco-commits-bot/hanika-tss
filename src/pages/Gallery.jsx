import { useEffect } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import academic6 from '../assets/images/academic-6.jpg'
import academic5 from '../assets/images/academic-5.jpg'
import academic7 from '../assets/images/academic-7.jpg'
import academic2 from '../assets/images/academic-2.webp'
import academic4 from '../assets/images/academic-4.jpg'
import academic3 from '../assets/images/academic-3.webp'
import academic1 from '../assets/images/academic-1.webp'
import styles from './Gallery.module.css'

const items = [
  { img: academic6, title: 'Cultural Festival', date: '16 Jan 2026' },
  { img: academic5, title: 'Industry Visit', date: '29 May 2026' },
  { img: academic6, title: 'Environmental Campaign', date: '5 Jun 2026' },
  { img: academic7, title: 'Guest Lecture', date: '2 Mar 2026' },
  { img: academic2, title: 'Awards Day', date: '23 Jul 2026' },
  { img: academic4, title: 'Open Campus Tour', date: '4 Sep 2026' },
  { img: academic3, title: 'Innovation Showcase', date: '7 Jul 2026' },
  { img: academic6, title: 'Community Outreach', date: '28 Mar 2026' },
  { img: academic1, title: 'Construction Practice', date: '19 Jun 2026' },
  { img: academic4, title: 'Agriculture Practice', date: '15 Mar 2026' },
  { img: academic4, title: 'Entrepreneurship Day', date: '30 Jan 2026' },
]

export default function Gallery() {
  useEffect(() => {
    document.title = 'Hanika TSS | School Gallery'
  }, [])

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

      <div className={styles.gallery}>
        {items.map((item, i) => (
          <div className={styles.card} key={`${item.title}-${i}`}>
            <img src={item.img} className={styles.bg} alt={item.title} />
            <div className={styles.desc}>
              <div className={styles.text}>
                <div className={styles.big}>{item.title}</div>
                <div className={styles.small}>{item.date}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

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
