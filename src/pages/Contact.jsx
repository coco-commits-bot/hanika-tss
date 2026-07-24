import { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import styles from './Contact.module.css'

const initialForm = { name: '', email: '', phone: '', message: '' }

const WEB3FORMS_ACCESS_KEY = '2ba01787-619f-4735-8867-a94ebf6e58c1'

const faqs = [
  {
    q: 'What TVET trades does Hanika TSS offer?',
    a: 'We currently offer five trades: Automobile Technology (AUT), Software Development (SWD), Accounting (ACC), Building & Construction Services (BDC), and Electrical Technology (ELT), each combining classroom learning with hands-on workshop training.',
  },
  {
    q: 'What are the admission requirements?',
    a: "Admission is generally open to students who have completed lower secondary education. Specific requirements can vary by trade and intake — reach out via the contact form on this page and our team will guide you through what's needed for the intake you're interested in.",
  },
  {
    q: 'Does the school offer boarding?',
    a: 'For details on boarding availability, fees, and accommodation arrangements, please contact the school administration directly using the form below — this varies by trade and current capacity.',
  },
  {
    q: 'What are the school hours?',
    a: 'Classes generally run on weekdays during standard school hours, with practical workshop sessions scheduled alongside theory classes depending on the trade. Contact us for the exact timetable for your programme of interest.',
  },
  {
    q: 'Do students get industrial attachment or work placement?',
    a: 'Yes — as part of our competency-based training approach, students in relevant trades gain industrial attachment experience to build real-world skills alongside career guidance ahead of graduation.',
  },
  {
    q: 'How can I reach the school administration directly?',
    a: 'You can use the contact form on this page, or reach out to the relevant staff member directly — see the Administration Staff section on our About page for names, roles, and direct contact details.',
  },
]

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)
  const [faqOpen, setFaqOpen] = useState(false)
  const [openIndex, setOpenIndex] = useState(0)

  useEffect(() => {
    document.title = 'Hanika TSS | Contact Us'
  }, [])

  useEffect(() => {
    if (!faqOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') setFaqOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [faqOpen])

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return

    setSending(true)
    setError(false)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New message from ${form.name} — Hanika TSS website`,
          from_name: 'Hanika TSS Website',
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      })

      const data = await res.json()

      if (data.success) {
        setSent(true)
        setForm(initialForm)
        setTimeout(() => setSent(false), 5000)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
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
            <form className={styles.form} id="contactForm" onSubmit={handleSubmit}>
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
                <button type="submit" className={styles.submit} disabled={sending}>
                  <i className="fas fa-paper-plane"></i>
                  <p>{sending ? 'sending…' : 'send'}</p>
                </button>
                {sent && (
                  <div className={styles.sentMsg}>Thanks — your message has been sent!</div>
                )}
                {error && (
                  <div className={styles.errorMsg}>
                    Something went wrong sending your message. Please try again, or reach out
                    directly using the details on our About page.
                  </div>
                )}
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
        <div className={styles.button} onClick={() => setFaqOpen(true)}>
          explore <i className="fas fa-arrow-right"></i>
        </div>
      </div>

      {faqOpen && (
        <div className={styles.faqModalOverlay} onClick={() => setFaqOpen(false)}>
          <div className={styles.faqModal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.faqModalHeader}>
              <div className={styles.faqModalTitle}>Frequently Asked Questions</div>
              <button
                className={styles.faqModalClose}
                onClick={() => setFaqOpen(false)}
                aria-label="Close"
              >
                <i className="fas fa-xmark"></i>
              </button>
            </div>
            <div className={styles.faqList}>
              {faqs.map((item, i) => (
                <div className={styles.faqItem} key={item.q}>
                  <button
                    className={styles.faqQuestion}
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  >
                    <span>{item.q}</span>
                    <i className={`fas ${openIndex === i ? 'fa-minus' : 'fa-plus'}`}></i>
                  </button>
                  {openIndex === i && <div className={styles.faqAnswer}>{item.a}</div>}
                </div>
              ))}
            </div>
            <div className={styles.faqModalFooter}>
              Still have a question we didn't cover?{' '}
              <span
                className={styles.faqModalLink}
                onClick={() => {
                  setFaqOpen(false)
                  document.getElementById('contactForm')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Ask us directly
              </span>
              .
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
