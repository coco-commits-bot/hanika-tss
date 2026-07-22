import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css'

const links = [
  { to: '/', label: 'home', icon: 'fa-home', end: true },
  { to: '/about', label: 'about', icon: 'fa-info-circle' },
  { to: '/gallery', label: 'gallery', icon: 'fa-images' },
  { to: '/admission', label: 'admission', icon: 'fa-users' },
  { to: '/support', label: 'contact', icon: 'fa-phone' },
]

export default function Nav({ showLogo = false }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={styles.header} style={showLogo ? { justifyContent: 'space-between' } : undefined}>
      {showLogo && <div className={styles.logo}>H A N I K A &nbsp; T S S</div>}

      <label className={styles.navClose} onClick={() => setOpen((o) => !o)}>
        <i className={`fas ${open ? 'fa-xmark' : 'fa-bars'}`}></i>
      </label>

      <div className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            onClick={() => setOpen(false)}
            className={({ isActive }) => `${styles.opt} ${isActive ? styles.active : ''}`}
          >
            <div className={styles.wall}></div>
            <i className={`fas ${link.icon}`}></i>
            {link.label}
          </NavLink>
        ))}
      </div>
    </div>
  )
}
