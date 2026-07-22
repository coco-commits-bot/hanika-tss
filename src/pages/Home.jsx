import { useEffect } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import logo from '../assets/images/haip-logo.png'
import styles from './Home.module.css'

const cards = [
  {
    icon: 'fa-eye',
    title: 'vision',
    desc: 'To be a center of excellence in technical and vocational education, producing skilled professionals who contribute to the development of our society.',
  },
  {
    icon: 'fa-quote-left',
    title: 'motto',
    desc: 'Excellence in Technical Education and culture with values',
  },
  {
    icon: 'fa-flag',
    title: 'mission',
    desc: 'To provide quality technical and vocational education and training that meets the needs of the industry and society.',
  },
]

export default function Home() {
  useEffect(() => {
    document.title = 'Hanika TSS | Home'
  }, [])

  return (
    <div>
      <div className={styles.head}>
        <Nav />
        <div className={styles.content}>
          <div className={styles.logo}>
            <img src={logo} alt="Hanika TSS logo" />
          </div>
          <div className={styles.title}>
            <span>welcome</span> to hanika Tss
          </div>
          <div className={styles.subTitle}>
            Welcome to Hanika Technical Secondary School the TVET arm of Hanika
            Anglican Integrated Polytechnic in Nyanza District, training students
            since 1986 in Automobile Technology (AUT), Software Development (SWD),
            Accounting (ACC), Building &amp; Construction Services (BDC), and
            Electrical Technology (ELT), all rooted in strong Christian values,
            discipline, and hands-on excellence.
          </div>
        </div>
      </div>

      <div className={styles.quotes}>
        <div className={styles.cards}>
          {cards.map((card) => (
            <div className={styles.card} key={card.title}>
              <div className={styles.icon}>
                <i className={`fas ${card.icon}`}></i>
              </div>
              <div className={styles.cardTitle}>{card.title}</div>
              <div className={styles.desc}>{card.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
