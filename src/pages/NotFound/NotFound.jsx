import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import './NotFound.css'

function handleGoBack() {
  if (window.history.length > 1) {
    window.history.back()
    return
  }

  window.location.href = '/'
}

function NotFound() {
  return (
    <div className="not-found-page">
      <Header />

      <main className="not-found-page__main">
        <section className="not-found-hero">
          <p className="not-found-hero__eyebrow">Khôi Mắm Vị Mắm</p>
          <h1>PAGE NOT FOUND</h1>
        </section>

        <section className="not-found-body">
          <div className="not-found-body__copy">
            <p>
              Có vẻ như trang này đã rẽ sang một hướng khác mất rồi. Đừng lo, mình sẽ đưa bạn quay lại đúng nhịp để tiếp tục tìm thứ bạn đang cần trên website.
            </p>

            <button type="button" className="not-found-body__back" onClick={handleGoBack}>
              Trở về trang trước →
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default NotFound
