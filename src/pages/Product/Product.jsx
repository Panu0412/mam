import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import MiniCombo from '../../components/MiniCombo/MiniCombo.jsx'
import './Product.css'

import bacBoMain from '../../assets/section-Bestseller/Bac_Bo/mam_tep.jpeg'
import bacBoSecond from '../../assets/section-Bestseller/mam-tep_chung_thit.jpg'
import bacBoThird from '../../assets/section-Bestseller/mam_ca_com.jpg'
import bacBoFourth from '../../assets/section-Bestseller/mam_tom_cha.jpg'
import trungBoMain from '../../assets/section-Bestseller/Trung_Bo/thit-kho-mam-ruoc.jpg'
import trungBoSecond from '../../assets/section-Bestseller/mam.ruocwebp.webp'
import trungBoThird from '../../assets/section-Bestseller/mam_ca_thu.jpg'
import trungBoFourth from '../../assets/section-Bestseller/mam_cong.jpg'
import namBoMain from '../../assets/section-Bestseller/Nam_Bo/mam-ca-linh.jpg'
import namBoSecond from '../../assets/section-Bestseller/mam-ca-ro.jpg'
import namBoThird from '../../assets/section-Bestseller/mam_ba_khia.jpg'
import namBoFourth from '../../assets/section-Bestseller/Mắm_cá_lóc.jpg'

const createProducts = (regionLabel, items) =>
  items.map((item, index) => ({
    id: `${regionLabel.toLowerCase()}-${index + 1}`,
    label: regionLabel,
    ...item,
  }))

const northProducts = createProducts('Bắc', [
  { title: 'Mắm tôm Bắc Bộ', image: bacBoMain, description: 'Đậm vị, hợp bún đậu, rau luộc và những bữa cơm quen vị truyền thống.' },
  { title: 'Mắm tép chưng thịt', image: bacBoSecond, description: 'Thơm béo, ăn cùng cơm nóng rất bắt vị và dễ dùng mỗi ngày.' },
  { title: 'Mắm cá cơm miền Bắc', image: bacBoThird, description: 'Vị mắm gọn, thơm dịu, thích hợp làm nước chấm hoặc chưng nóng.' },
  { title: 'Mắm tôm chà', image: bacBoFourth, description: 'Đậm đà, lên món nhanh cho bữa cơm gia đình hoặc quà biếu quê vị.' },
  { title: 'Mắm tôm hũ nhỏ', image: bacBoMain, description: 'Thiết kế gọn, vị tròn, thuận tiện cho bếp nhà dùng hằng ngày.' },
  { title: 'Mắm tép truyền thống', image: bacBoSecond, description: 'Mùi thơm rõ, vị ngọt hậu nhẹ và hợp món chưng hoặc kho.' },
  { title: 'Mắm cá cơm đậm vị', image: bacBoThird, description: 'Dùng làm chấm rau củ, thịt luộc hoặc pha sốt đều nổi bật.' },
  { title: 'Mắm chà Bắc Bộ', image: bacBoFourth, description: 'Texture sánh, hương thơm rõ và hợp cơm nóng, xôi hoặc bún.' },
  { title: 'Mắm tôm loại đặc biệt', image: bacBoMain, description: 'Một phiên bản đậm hơn cho người thích vị mắm sắc nét.' },
  { title: 'Mắm tép vị truyền thống', image: bacBoSecond, description: 'Hài hòa giữa vị mặn, ngọt và thơm, dễ kết hợp nhiều món.' },
  { title: 'Mắm cá cơm nguyên vị', image: bacBoThird, description: 'Giữ chất vị quê, phù hợp làm nền cho nhiều món gia đình.' },
  { title: 'Mắm chà ăn liền', image: bacBoFourth, description: 'Tiện dùng, đậm đà và lên vị nhanh cho các bữa ăn đơn giản.' },
])

const southProducts = createProducts('Nam', [
  { title: 'Mắm cá linh Nam Bộ', image: namBoMain, description: 'Đậm vị, dậy mùi, ăn cùng cơm trắng hoặc bún rau đều rất hợp.' },
  { title: 'Mắm cá rô miền Nam', image: namBoSecond, description: 'Vị đậm sâu, hợp chưng, kho hoặc làm quà cho người mê mắm.' },
  { title: 'Mắm ba khía', image: namBoThird, description: 'Đặc trưng miền sông nước, rất hợp trộn, chấm hoặc ăn kèm rau sống.' },
  { title: 'Mắm cá lóc', image: namBoFourth, description: 'Thơm rõ, hậu vị đậm, nổi bật khi ăn cùng bún và rau đồng.' },
  { title: 'Mắm cá linh hũ nhỏ', image: namBoMain, description: 'Phù hợp cho gia đình nhỏ muốn thưởng thức vị miền Nam mỗi ngày.' },
  { title: 'Mắm cá rô truyền thống', image: namBoSecond, description: 'Vị tròn, màu đẹp, ăn cùng cơm nóng rất vào vị.' },
  { title: 'Mắm ba khía loại ngon', image: namBoThird, description: 'Thịt chắc, thơm rõ, có thể dùng trực tiếp hoặc chế biến thêm.' },
  { title: 'Mắm cá lóc đậm đà', image: namBoFourth, description: 'Phù hợp người thích vị mắm mạnh và các món ăn dân dã miền Tây.' },
  { title: 'Mắm cá linh đặc biệt', image: namBoMain, description: 'Một lựa chọn nổi bật cho set quà hoặc gian bếp yêu món quê.' },
  { title: 'Mắm cá rô ăn liền', image: namBoSecond, description: 'Tiện lợi, dễ dùng, giữ được độ đậm đà của dòng mắm miền Nam.' },
  { title: 'Mắm ba khía chọn lọc', image: namBoThird, description: 'Phù hợp làm món trộn nhanh với hương vị rõ và bắt cơm.' },
  { title: 'Mắm cá lóc truyền thống', image: namBoFourth, description: 'Giữ trọn chất vị quen thuộc, hợp nhiều bữa ăn gia đình.' },
])

const centralProducts = createProducts('Trung', [
  { title: 'Mắm ruốc miền Trung', image: trungBoMain, description: 'Mùi thơm nồng, vị sắc nét và rất hợp nêm nếm hoặc chấm món luộc.' },
  { title: 'Mắm ruốc hũ nhỏ', image: trungBoSecond, description: 'Dễ dùng trong bếp hằng ngày, cho món ăn dậy mùi nhanh và rõ vị.' },
  { title: 'Mắm cá thu', image: trungBoThird, description: 'Đậm đà, hợp cơm nóng, rau luộc và nhiều món ăn miền biển.' },
  { title: 'Mắm còng', image: trungBoFourth, description: 'Một hương vị lạ miệng, cá tính, phù hợp người thích đặc sản vùng miền.' },
  { title: 'Mắm ruốc đặc biệt', image: trungBoMain, description: 'Phiên bản đậm hơn để nấu bún, kho thịt hoặc xào đều rất nổi bật.' },
  { title: 'Mắm ruốc truyền thống', image: trungBoSecond, description: 'Giữ hương vị quen thuộc, dễ làm nền cho nhiều món miền Trung.' },
  { title: 'Mắm cá thu loại ngon', image: trungBoThird, description: 'Cân bằng giữa vị mặn và thơm, hợp dùng trong bữa cơm nhà.' },
  { title: 'Mắm còng chọn lọc', image: trungBoFourth, description: 'Đậm chất địa phương, thích hợp người muốn khám phá vị mắm mới.' },
  { title: 'Mắm ruốc ăn liền', image: trungBoMain, description: 'Tiện mở nắp dùng ngay, giúp món ăn tăng chiều sâu hương vị.' },
  { title: 'Mắm ruốc cô đặc', image: trungBoSecond, description: 'Rất hợp pha sốt, xào sả ớt hoặc chấm trái cây kiểu miền Trung.' },
  { title: 'Mắm cá thu truyền thống', image: trungBoThird, description: 'Dùng được cho cả món chưng, món kho hoặc ăn cùng rau luộc.' },
  { title: 'Mắm còng hũ đặc sản', image: trungBoFourth, description: 'Đậm vị, khác biệt và phù hợp làm điểm nhấn cho gian hàng sản phẩm.' },
])

const productSections = [
  { id: 'mien-bac', title: 'Sản phẩm miền Bắc', tab: 'Bắc', cards: northProducts },
  { id: 'mien-nam', title: 'Sản phẩm miền Nam', tab: 'Nam', cards: southProducts },
  { id: 'mien-trung', title: 'Sản phẩm miền Trung', tab: 'Trung', cards: centralProducts },
]

function Product() {
  return (
    <div className="product-page">
      <Header />

      <main className="product-page__main" id="product">
        <section className="product-page__hero">
          <div className="product-page__hero-copy">
            <p className="product-page__eyebrow">Trang sản phẩm</p>
            <h1>Bộ sưu tập sản phẩm 3 miền với trải nghiệm chọn vị thật gần với bếp nhà Việt</h1>
            <p>
              Từ vị Bắc đậm sâu, vị Trung sắc nét tới vị Nam mộc mà bắt cơm, mỗi section đều được giữ chất riêng để khách dễ tìm đúng loại mắm mình yêu thích.
            </p>
            <a className="product-page__cta" href="#mien-bac">
              Xem sản phẩm
            </a>
          </div>
        </section>

        <div className="product-page__sections">
          {productSections.map((section) => (
            <section key={section.id} id={section.id} className="product-page__section">
              <div className="product-page__section-header">
                <p className="product-page__section-kicker">Danh mục vùng miền</p>
                <h2>{section.title}</h2>
              </div>

              <MiniCombo
                eyebrow="Bộ sưu tập"
                title={section.title}
                tabs={[section.tab]}
                cards={section.cards}
              />
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Product
