import { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import styles from './Contact.module.css'

const initialForm = { name: '', email: '', phone: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    document.title = 'Hanika TSS | Contact Us'
  }, [])

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    // No backend is wired up yet — this just confirms receipt locally.
    setSent(true)
    setForm(initialForm)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <div>
      <div className={styles.head}>
        <Nav showLogo />
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.title}>
              didn't catch <br /> up with <span>something</span>?
            </div>
            <div className={styles.subTitle}>
              This is your free space to talk to some elders, leave a
              recommendation or a review, even provide supporting ideas that could
              aid our improvement.
            </div>
          </div>
          <div className={styles.right}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formTitle}>Contact us</div>
              <div className={styles.realForm}>
                <div className={styles.input}>
                  <div className={styles.icon}>
                    <i className="fas fa-user"></i>
                  </div>
                  <input
                    type="text"
                    placeholder="Your official full name"
                    value={form.name}
                    onChange={handleChange('name')}
                    required
                  />
                </div>
                <div className={styles.input}>
                  <input
                    type="email"
                    placeholder="Provide your active email"
                    value={form.email}
                    onChange={handleChange('email')}
                    required
                  />
                  <div className={styles.icon}>
                    <i className="fas fa-envelope"></i>
                  </div>
                </div>
                <div className={styles.input}>
                  <div className={styles.icon}>
                    <i className="fas fa-phone"></i>
                  </div>
                  <input
                    type="text"
                    placeholder="Reachable phone number (optional)"
                    value={form.phone}
                    onChange={handleChange('phone')}
                  />
                </div>
                <div className={styles.input}>
                  <textarea
                    placeholder="Your message . . ."
                    value={form.message}
                    onChange={handleChange('message')}
                    required
                  ></textarea>
                </div>
                <button type="submit" className={styles.submit}>
                  <i className="fas fa-paper-plane"></i>
                  <p>send</p>
                </button>
                {sent && <div className={styles.sentMsg}>Thanks — your message has been received!</div>}
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className={styles.faq}>
        <div className={styles.faqTitle}>
          <div className={styles.top}>Frequently Asked Questions</div>
          <div className={styles.bottom}>
            Find and explore quick answers before contacting us.
          </div>
        </div>
        <div className={styles.button}>
          explore <i className="fas fa-arrow-right"></i>
        </div>
      </div>

      <Footer />
    </div>
  )
}
