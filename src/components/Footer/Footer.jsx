import './Footer.css'

const footerLinks = {
  explore: [
    { label: 'Mắm Nam Bộ', href: '#south' },
    { label: 'Mắm miền Trung', href: '#central' },
    { label: 'Mắm Tây Bắc', href: '#northwest' },
  ],
  support: [
    { label: 'Giao hàng toàn quốc', href: '#shipping' },
    { label: 'Đổi trả', href: '#return-policy' },
    { label: 'Câu hỏi thường gặp', href: '#faq' },
  ],
  policy: [{ label: 'Chính sách', href: '/policy' }],
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <section className="footer-column footer-brand-block">
          <p className="footer-eyebrow">Mắm 3 miền</p>
          <h2>Panu Shop</h2>
          <p className="footer-description">
            Nơi gom vị mắm Nam - Trung - Tây Bắc trong một không gian hiện đại, chỉn chu và dễ
            mua sắm.
          </p>

          <div className="footer-contact-list">
            <p>
              <span>Hotline</span>
              <strong>0901 386 386</strong>
            </p>
            <p>
              <span>Email</span>
              <strong>hello@panushop.vn</strong>
            </p>
          </div>

          <div className="footer-actions">
            <a className="footer-cta" href="#contact">
              Liên hệ đặt hàng
            </a>
            <a className="footer-secondary-link" href="/policy">
              Xem chính sách
            </a>
          </div>
        </section>

        <section className="footer-column footer-links-block" aria-label="Liên kết footer">
          <div>
            <h3>Khám phá</h3>
            <ul>
              {footerLinks.explore.map((item) => (
                <li key={item.label}>
                  <a className="footer-link" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Hỗ trợ</h3>
            <ul>
              {footerLinks.support.map((item) => (
                <li key={item.label}>
                  <a className="footer-link" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Chính sách</h3>
            <ul>
              {footerLinks.policy.map((item) => (
                <li key={item.label}>
                  <a className="footer-link" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Panu Shop. Tự hào mắm ngon ba miền.</p>
        <p>Nam Bộ • Trung Bộ • Tây Bắc</p>
      </div>
    </footer>
  )
}

export default Footer
