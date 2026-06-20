import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import './Contact.css'

const mapShareUrl = 'https://maps.app.goo.gl/NUCHSJ8XT69XwVNWA'
const mapAddress = 'chung cư, 006 lô B Tôn Thất Thuyết, Khánh Hội, Hồ Chí Minh, Việt Nam'
const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapAddress)}&z=17&output=embed`

const services = [
  'Mắm miền Bắc',
  'Mắm miền Trung',
  'Mắm miền Nam',
  'Set quà biếu',
  'Đặt số lượng lớn',
  'Tư vấn món dùng kèm',
]

function Contact() {
  return (
    <div className="contact-page">
      <Header />

      <main className="contact-page__main">
        <section className="contact-shell">
          <div className="contact-panel">
            <div className="contact-copy">
              <p className="contact-copy__eyebrow">Liên hệ với Khôi Mắm</p>
              <h1>Get in touch</h1>
              <p className="contact-copy__lead">
                Mình luôn sẵn sàng hỗ trợ bạn chọn đúng hũ mắm, set quà hoặc cách dùng hợp món. Cứ để lại thông tin, đội ngũ bên mình sẽ phản hồi sớm.
              </p>

              <div className="contact-links">
                <a href="tel:0901386386">Gọi hotline tư vấn</a>
                <a href="mailto:hello@panushop.vn">Gửi email cho Khôi Mắm</a>
                <a href={mapShareUrl} target="_blank" rel="noreferrer">
                  Mở địa chỉ trên Google Maps
                </a>
              </div>
            </div>

            <form className="contact-form">
              <div className="contact-form__grid">
                <label className="contact-field">
                  <span>Họ</span>
                  <input type="text" placeholder="Nhập họ của bạn" />
                </label>

                <label className="contact-field">
                  <span>Tên</span>
                  <input type="text" placeholder="Nhập tên của bạn" />
                </label>
              </div>

              <label className="contact-field">
                <span>Email</span>
                <input type="email" placeholder="you@company.com" />
              </label>

              <label className="contact-field">
                <span>Số điện thoại</span>
                <input type="tel" placeholder="0901 386 386" />
              </label>

              <div className="contact-services">
                <p className="contact-services__title">Bạn quan tâm đến</p>
                <div className="contact-services__grid">
                  {services.map((service) => (
                    <label key={service} className="contact-check">
                      <input type="checkbox" />
                      <span>{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button type="button" className="contact-submit">
                Gửi thông tin
              </button>
            </form>
          </div>

          <div className="contact-map">
            <div className="contact-map__frame">
              <iframe
                title="Google Maps location"
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="contact-map__overlay">
                <div>
                  <p>Địa chỉ cửa hàng</p>
                  <strong>Khôi Mắm</strong>
                </div>
                <a href={mapShareUrl} target="_blank" rel="noreferrer">
                  Xem trên Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Contact
