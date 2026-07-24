import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const trades = [
  'Accounting [ACC]',
  'Automobile Technology [AUT]',
  'Building & Construction Services [BDC]',
  'Electrical Technology [ELT]',
  'Networking and Internet Technology [NIT]',
  'Software Development [SWD]',
]

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.logo}>HANIKA&nbsp;TSS</div>
        <div className={styles.desc}>
          Hanika Technical Secondary School (Hanika TSS) is a leading institution in
          technical and vocational education, dedicated to nurturing skilled
          professionals with strong Christian values and discipline.
        </div>
        <div className={styles.socials}>
          <a
            style={{ textDecoration: 'none' }}
            href="https://www.facebook.com/hanikaaip/"
            target="_blank"
            rel="noreferrer"
            className={styles.social}
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            style={{ textDecoration: 'none' }}
            href="https://x.com/HanikaHaip28141"
            target="_blank"
            rel="noreferrer"
            className={styles.social}
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            style={{ textDecoration: 'none' }}
            href="https://www.instagram.com/haip250/"
            target="_blank"
            rel="noreferrer"
            className={styles.social}
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            style={{ textDecoration: 'none' }}
            href="mailto:hanikaaip5@gmail.com"
            className={styles.social}
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
      <div className={styles.tradesCol}>
        <div className={styles.title}>our school trades</div>
        <div className={styles.trades}>
          {trades.map((trade) => (
            <Link
              key={trade}
              to="/about#alltrades"
              style={{ textDecoration: 'none' }}
              className={styles.trade}
            >
              {trade}
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.newsletter}>
        <div className={styles.small}>for more information,</div>
        <div className={styles.title}>Check out our school contacts.</div>
        <Link to="/support" className={styles.button}>
          <button>contact us</button>
        </Link>
      </div>
      <div className={styles.after}>
        © 2026 Hanika TSS. All rights reserved. | Designed &amp; Developed by Nkusi Nadiv
      </div>
    </div>
  )
}
