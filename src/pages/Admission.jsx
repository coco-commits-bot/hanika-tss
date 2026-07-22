import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import styles from './Admission.module.css'

export default function Admission() {
  useEffect(() => {
    document.title = 'Hanika TSS | Admission'
  }, [])

  return (
    <div>
      <div className={styles.head}>
        <Nav showLogo />
        <div className={styles.content}>
          <div className={styles.title}>
            join <span>hanika</span> tss
          </div>
          <div className={styles.subTitle}>
            Hanika TSS <span>| Admission</span>
          </div>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.card}>
          <i className="fas fa-users"></i>
          <div className={styles.cardTitle}>Admissions are opening soon</div>
          <div className={styles.cardDesc}>
            We're putting together the full admission process, requirements and
            intake dates for our TVET trades. In the meantime, reach out to our
            team directly and we'll guide you through getting started.
          </div>
          <Link to="/support" className={styles.link}>
            <button>contact admissions</button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}
