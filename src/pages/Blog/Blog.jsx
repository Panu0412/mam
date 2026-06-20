import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import './Blog.css'

import heroImage from '../../assets/about_us/hq720.jpg'
import featureOneImage from '../../assets/about_us/bayern-5544-2763.jpeg.webp'
import featureTwoImage from '../../assets/about_us/images.jpg'
import featureThreeImage from '../../assets/about_us/bayern-munich.jpg'
import momentOneImage from '../../assets/section-Bestseller/Nam_Bo/mam-ca-linh.jpg'
import momentTwoImage from '../../assets/section-Bestseller/Trung_Bo/thit-kho-mam-ruoc.jpg'
import momentThreeImage from '../../assets/section-Bestseller/Bac_Bo/mam_tep.jpeg'

const articleLink = '/404'

const audioItems = [
  'Mắm cá linh: mùa nước nổi và câu chuyện giữ vị',
  'Mắm tép chưng thịt: món nhỏ nhưng gợi cả bữa cơm nhà',
  'Bí quyết để mắm ruốc dậy mùi mà không gắt',
  'Chọn hũ mắm làm quà: nên bắt đầu từ vùng nào',
  'Vì sao vị mắm ngon luôn đi cùng độ chín thời gian',
]

const featureCards = [
  {
    title: 'Săn vị mắm đầu mùa miền Tây',
    category: 'Phóng sự bếp Việt',
    image: featureOneImage,
    excerpt: 'Theo chân gian bếp miền sông nước để xem cách một hũ mắm cá linh được chọn, ủ và lên vị cho mùa nước nổi.',
  },
  {
    title: 'Mắm ruốc và căn bếp biết kể chuyện',
    category: 'Góc văn hóa',
    image: featureTwoImage,
    excerpt: 'Những căn bếp nhỏ ở miền Trung luôn có một góc dành cho mắm ruốc, vì đó không chỉ là gia vị mà còn là ký ức sống.',
  },
  {
    title: 'Hũ mắm làm quà vì sao ngày càng được yêu thích',
    category: 'Xu hướng quà tặng',
    image: featureThreeImage,
    excerpt: 'Từ món ăn dân dã, mắm đang trở thành một món quà có câu chuyện, có bản sắc và rất hợp để gửi hương vị quê nhà.',
  },
]

const spotlightPosts = [
  {
    title: 'Chân dung người giữ lửa cho mẻ mắm ngon',
    image: featureOneImage,
    tags: ['Nhân vật', 'Hậu trường', 'Mắm quê'],
    excerpt: 'Bên trong mỗi hũ mắm là rất nhiều năm kinh nghiệm, sự kiên nhẫn và cách canh vị bằng cảm giác nhiều hơn máy móc.',
  },
  {
    title: 'Mắm ba khía: hương vị mạnh nhưng rất tinh tế',
    image: featureTwoImage,
    tags: ['Nam Bộ', 'Đặc sản', 'Gia vị'],
    excerpt: 'Khi được trộn đúng kiểu, ba khía không chỉ đậm mà còn có chiều sâu vị giác rất riêng, vừa dân dã vừa cuốn hút.',
  },
]

const moments = [
  {
    title: 'Mắm cá linh trong bữa cơm chiều mưa',
    image: momentOneImage,
    excerpt: 'Một hũ mắm ngon có thể làm cả mâm cơm trở nên ấm hơn và gần gũi hơn chỉ bằng mùi thơm vừa mở nắp.',
  },
  {
    title: 'Mắm ruốc xào sả ớt cho ngày cần vị mạnh',
    image: momentTwoImage,
    excerpt: 'Đậm, thơm và dậy mùi rất nhanh, đây là kiểu bài demo bạn có thể thay ảnh sau trong `Blog.jsx`.',
  },
  {
    title: 'Mắm tép Bắc Bộ và chất mộc của bếp nhà',
    image: momentThreeImage,
    excerpt: 'Một góc nhìn nhẹ nhàng hơn về cách món mắm nhỏ có thể tạo ra bản sắc lớn cho thương hiệu ẩm thực.',
  },
]

function Blog() {
  return (
    <div className="blog-page">
      <Header />

      <main className="blog-page__main">
        <section className="blog-shell">
          <div className="blog-heading">
            <div>
              <p className="blog-heading__logo">MẮM JOURNAL</p>
              <h1>Những câu chuyện quanh hũ mắm ngon, bếp Việt và ký ức vùng miền.</h1>
            </div>
            <p className="blog-heading__meta">Blog demo cho thương hiệu làm mắm. Sau này bạn chỉ cần vào `Blog.jsx` để đổi đường dẫn ảnh.</p>
          </div>

          <section className="blog-hero-card">
            <div className="blog-hero-card__copy">
              <p className="blog-kicker">Bài viết nổi bật</p>
              <h2>Vì sao một hũ mắm ngon luôn bắt đầu từ thời gian và sự kiên nhẫn</h2>
              <p>
                Không phải cứ đậm là ngon. Bài viết này kể lại cách người làm mắm chọn nguyên liệu, chờ mắm chín và giữ cho hương vị đi xa hơn mùi đầu tiên.
              </p>
              <a className="blog-pill-link" href={articleLink}>
                Đọc bài viết
              </a>
            </div>

            <a className="blog-hero-card__image" href={articleLink}>
              <img src={heroImage} alt="Bài viết nổi bật về hành trình làm mắm" />
            </a>
          </section>

          <section className="blog-grid blog-grid--top">
            <article className="blog-card blog-card--playlist">
              <p className="blog-kicker">Nghe cùng bếp Việt</p>
              <h2>Playlist những câu chuyện dễ nghe khi đang nấu món với mắm</h2>
              <ul className="blog-audio-list">
                {audioItems.map((item, index) => (
                  <li key={item}>
                    <span>{`${index + 1}`.padStart(2, '0')}</span>
                    <a href={articleLink}>{item}</a>
                  </li>
                ))}
              </ul>
              <a className="blog-button" href={articleLink}>
                Mở playlist
              </a>
            </article>

            <article className="blog-card blog-card--podcast">
              <p className="blog-kicker">Âm thanh thương hiệu</p>
              <h2>Nghe podcast về bếp quê, vị mắm và chuyện đem đặc sản lên web</h2>
              <a className="blog-button blog-button--wide" href={articleLink}>
                Nghe thử ngay
              </a>
            </article>
          </section>

          <section className="blog-grid blog-grid--features">
            <div className="blog-section-title">
              <p className="blog-kicker">Bài viết mới</p>
              <h2>Điểm sáng của tuần</h2>
            </div>

            {featureCards.map((card) => (
              <article key={card.title} className="blog-card blog-card--feature">
                <a className="blog-card__image" href={articleLink}>
                  <img src={card.image} alt={card.title} />
                </a>
                <div className="blog-card__body">
                  <p className="blog-tagline">{card.category}</p>
                  <h3>
                    <a href={articleLink}>{card.title}</a>
                  </h3>
                  <p>{card.excerpt}</p>
                </div>
              </article>
            ))}
          </section>

          <section className="blog-grid blog-grid--spotlight">
            <div className="blog-section-title">
              <p className="blog-kicker">Spotlight</p>
              <h2>Những nhân vật và hương vị đáng để nhìn gần hơn</h2>
            </div>

            {spotlightPosts.map((post) => (
              <article key={post.title} className="blog-card blog-card--spotlight">
                <a className="blog-card__image" href={articleLink}>
                  <img src={post.image} alt={post.title} />
                </a>
                <div className="blog-card__body">
                  <div className="blog-tags">
                    {post.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <h3>
                    <a href={articleLink}>{post.title}</a>
                  </h3>
                  <p>{post.excerpt}</p>
                </div>
              </article>
            ))}
          </section>

          <section className="blog-grid blog-grid--newsletter">
            <article className="blog-card blog-card--digest">
              <div>
                <p className="blog-kicker">Lịch đăng mới</p>
                <h2>Nhịp blog hằng tuần cho người mê vị mắm</h2>
              </div>
              <div className="blog-digest">
                <div>
                  <strong>Workshop nhỏ</strong>
                  <p>Chia sẻ cách dùng mắm đúng món để lên vị gọn và sạch hơn trong bữa cơm nhà.</p>
                </div>
                <div>
                  <strong>Monthly digest</strong>
                  <p>Tóm lại các bài viết hay nhất về nguyên liệu, cách chọn mắm và những câu chuyện hậu trường.</p>
                </div>
              </div>
            </article>

            <article className="blog-card blog-card--signup">
              <p className="blog-kicker">Nhận tin mới</p>
              <h2>Đăng ký để nhận bài mới về mắm, món ăn và câu chuyện thương hiệu</h2>
              <input type="email" placeholder="Nhập email của bạn" />
              <button type="button" className="blog-button blog-button--wide">
                Đăng ký
              </button>
            </article>
          </section>

          <section className="blog-moments">
            <div className="blog-section-title">
              <p className="blog-kicker">Must-see moments</p>
              <h2>Những khoảnh khắc đáng xem từ căn bếp, hũ mắm và bàn ăn Việt</h2>
            </div>

            <div className="blog-moments__grid">
              {moments.map((moment) => (
                <article key={moment.title} className="blog-card blog-card--moment">
                  <a className="blog-card__image" href={articleLink}>
                    <img src={moment.image} alt={moment.title} />
                  </a>
                  <div className="blog-card__body">
                    <h3>
                      <a href={articleLink}>{moment.title}</a>
                    </h3>
                    <p>{moment.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Blog
