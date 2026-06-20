import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import './Special.css'

const reviewStats = [
  { stars: 5, percent: 82 },
  { stars: 4, percent: 15 },
  { stars: 3, percent: 3 },
]

const highlightedReviews = [
  {
    id: 'rv-1',
    name: 'Ngọc Hân',
    location: 'TP. Hồ Chí Minh',
    rating: 5,
    time: '3 ngày trước',
    text: 'Mắm lên vị rất tròn, mở hũ ra là thơm ngay nhưng không bị gắt. Mình mua làm quà mà ai cũng hỏi xin lại link.',
    badge: 'Đã mua combo miền Nam',
  },
  {
    id: 'rv-2',
    name: 'Khánh Vy',
    location: 'Cần Thơ',
    rating: 4.9,
    time: '1 tuần trước',
    text: 'Phần đóng gói sạch, chỉn chu và đúng chất đặc sản. Giao diện web cũng cho cảm giác rất hợp với câu chuyện thương hiệu mắm quê.',
    badge: 'Đánh giá nổi bật',
  },
  {
    id: 'rv-3',
    name: 'Minh Tân',
    location: 'Đà Nẵng',
    rating: 4.8,
    time: '2 tuần trước',
    text: 'Mắm ruốc đậm vừa phải, nấu bún hay xào sả ớt đều lên màu đẹp. Mình thích nhất là phần review nhìn giống Google nên rất dễ tin tưởng.',
    badge: 'Khách quay lại lần 2',
  },
]

const communityComments = [
  {
    id: 'cm-1',
    name: 'Thanh Trúc',
    rating: 5,
    dish: 'Ăn cùng cơm nóng',
    text: 'Tên sản phẩm, cách chụp hình và chất màu của web nhìn rất đồng nhất. Comment thật sự muốn để lại thêm vì ăn thấy đúng vị quê như mô tả.',
  },
  {
    id: 'cm-2',
    name: 'Gia Bảo',
    rating: 4.9,
    dish: 'Chưng thịt',
    text: 'Mắm tép chưng thịt rất bắt cơm, mình thích kiểu trình bày review có sao, thanh điểm và bình luận ở dưới nên nhìn rất thuyết phục.',
  },
  {
    id: 'cm-3',
    name: 'Mỹ Duyên',
    rating: 4.7,
    dish: 'Pha nước chấm',
    text: 'Phần nội dung comment dùng font mềm và có cá tính nên hợp với tinh thần thủ công của thương hiệu. Tổng thể nhìn vừa mộc vừa sang.',
  },
  {
    id: 'cm-4',
    name: 'Anh Khoa',
    rating: 5,
    dish: 'Làm quà biếu',
    text: 'Nếu đây là trang đặc biệt để khách xem đánh giá thì quá ổn. Vừa có cảm giác uy tín như Google review, vừa giữ được nét riêng của web.',
  },
]

const renderStars = (rating) => {
  const fullStars = Math.round(rating)

  return Array.from({ length: 5 }, (_, index) => (
    <span key={`${rating}-${index}`} aria-hidden="true">
      {index < fullStars ? '★' : '☆'}
    </span>
  ))
}

function Special() {
  return (
    <div className="special-page">
      <Header />

      <main className="special-page__main">
        <section className="special-page__hero">
          <div className="special-page__hero-inner">
            <p className="special-page__eyebrow">Trang đặc biệt</p>
            <h1>Khách hàng nói gì về hương vị mắm nhà mình</h1>
            <p className="special-page__intro">
              Một không gian riêng để gom lại cảm nhận chân thật từ khách đã mua, theo kiểu dễ đọc như Google review nhưng vẫn giữ đúng tinh thần thương hiệu mắm quê của bạn.
            </p>
          </div>
        </section>

        <section className="special-page__content">
          <div className="special-reviews__summary">
            <div className="special-reviews__score-card">
              <span className="special-reviews__google-pill">Google style review</span>
              <div className="special-reviews__score">4.9</div>
              <div className="special-reviews__stars" aria-label="Xếp hạng trung bình 4.9 trên 5 sao">
                {renderStars(5)}
              </div>
              <p className="special-reviews__meta">Dựa trên 128 đánh giá thực tế, đa số nằm trong khoảng 4.7 đến 5 sao.</p>
            </div>

            <div className="special-reviews__bars" aria-label="Phân bổ đánh giá">
              {reviewStats.map((item) => (
                <div key={item.stars} className="special-reviews__bar-row">
                  <span className="special-reviews__bar-label">{item.stars} sao</span>
                  <div className="special-reviews__bar-track">
                    <span className="special-reviews__bar-fill" style={{ width: `${item.percent}%` }} />
                  </div>
                  <span className="special-reviews__bar-value">{item.percent}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="special-reviews__featured">
            {highlightedReviews.map((review) => (
              <article key={review.id} className="special-reviews__card">
                <div className="special-reviews__card-top">
                  <div>
                    <h3 className="special-reviews__name">{review.name}</h3>
                    <p className="special-reviews__subline">{review.location} • {review.time}</p>
                  </div>
                  <span className="special-reviews__badge">{review.badge}</span>
                </div>

                <div className="special-reviews__card-rating">
                  <span className="special-reviews__rating-number">{review.rating.toFixed(1)}</span>
                  <div className="special-reviews__stars" aria-hidden="true">
                    {renderStars(review.rating)}
                  </div>
                </div>

                <p className="special-reviews__text">{review.text}</p>
              </article>
            ))}
          </div>

          <div className="special-comments">
            <div className="special-comments__header">
              <div>
                <p className="special-comments__eyebrow">Bình luận từ người dùng</p>
                <h2>Khách có thể để lại cảm nhận ngay bên dưới</h2>
              </div>
              <div className="special-comments__chip">Hiển thị dạng cộng đồng</div>
            </div>

            <form className="special-comments__composer">
              <label className="special-comments__field">
                <span>Tên của bạn</span>
                <input type="text" placeholder="Ví dụ: Lan Anh" />
              </label>

              <label className="special-comments__field">
                <span>Món bạn dùng cùng</span>
                <input type="text" placeholder="Ví dụ: bún đậu, cơm nóng..." />
              </label>

              <label className="special-comments__field special-comments__field--full">
                <span>Viết cảm nhận</span>
                <textarea rows="4" placeholder="Chia sẻ hương vị bạn thích, cách bạn ăn cùng món gì, hoặc cảm nhận về sản phẩm..." />
              </label>

              <button type="button" className="special-comments__button">
                Gửi bình luận
              </button>
            </form>

            <div className="special-comments__list">
              {communityComments.map((comment) => (
                <article key={comment.id} className="special-comments__card">
                  <div className="special-comments__card-head">
                    <div>
                      <h3 className="special-comments__username">{comment.name}</h3>
                      <p className="special-comments__dish">{comment.dish}</p>
                    </div>

                    <div className="special-comments__mini-rating">
                      <span>{comment.rating.toFixed(1)}</span>
                      <div className="special-reviews__stars" aria-hidden="true">
                        {renderStars(comment.rating)}
                      </div>
                    </div>
                  </div>

                  <p className="special-comments__content">{comment.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Special
