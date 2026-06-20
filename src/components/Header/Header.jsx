import { useState } from 'react'
import logo from '../../assets/Logo.svg'
import './Header.css'

const navItems = [
  { label: 'Giới thiệu', href: '/about' },
  { label: 'Sản phẩm', href: '/product' },
  { label: 'Đặc biệt', href: '/special' },
  { label: 'Tin tức', href: '/blog' },
  { label: 'Liên hệ', href: '/contact' },
]

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="top-strip">
        <div className="top-strip-track">
          <p>Panu shop - Đậm vị quê, trọn yêu thương.</p>
          <p aria-hidden="true">Panu shop - Đậm vị quê, trọn yêu thương.</p>
        </div>
      </div>

      <div className="nav-bar">
        <button
          type="button"
          className="mobile-toggle"
          aria-expanded={isMobileMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
          <span className="sr-only">Mở menu</span>
        </button>

        <nav
          id="primary-navigation"
          className={`nav-layout ${isMobileMenuOpen ? 'is-open' : ''}`}
          aria-label="Menu chính"
        >
          <ul className="nav-links nav-links-left">
            {navItems.map((item) => (
              <li key={item.label}>
                <a className="nav-link" href={item.href} data-label={item.label}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a className="brand" href="/" aria-label="Panu shop home">
            <img className="brand-logo" src={logo} alt="Panu shop logo" />
          </a>

          <ul className="nav-links nav-links-right">
            <li className="utility-group">
              <label className="search-box" aria-label="Tìm kiếm sản phẩm">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M10.5 4a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13Zm0-2a8.5 8.5 0 1 0 5.36 15.1l4.57 4.56 1.41-1.41-4.56-4.57A8.5 8.5 0 0 0 10.5 2Z" />
                </svg>
                <input type="search" placeholder="Tìm kiếm..." />
              </label>

              <a className="utility-icon login-link" href="#login" aria-label="Đăng nhập">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 12.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
                  <path d="M3.5 21.5c1-4.4 4.1-7 8.5-7s7.5 2.6 8.5 7" />
                </svg>
              </a>

              <a className="utility-icon icon-button" href="#cart" aria-label="Giỏ hàng">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.5 8.5h11l.9 12h-12.8l.9-12Z" />
                  <path d="M9 8.5a3 3 0 0 1 6 0" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
