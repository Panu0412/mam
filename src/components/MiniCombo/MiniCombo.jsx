import './MiniCombo.css'

import bacBo from '../../assets/section-Bestseller/Bac_Bo/mam_tep.jpeg'
import namBo from '../../assets/section-Bestseller/Nam_Bo/mam-ca-linh.jpg'
import trungBo from '../../assets/section-Bestseller/Trung_Bo/thit-kho-mam-ruoc.jpg'

const comboCards = [
  {
    id: 'combo-1',
    label: 'Combo 1',
    title: 'Mắm Bắc Bộ',
    image: bacBo,
    description: 'Demo combo gồm 3 sản phẩm mắm đặc trưng miền Bắc, phù hợp cho bữa cơm nhà, rau luộc và món chấm.',
  },
  {
    id: 'combo-2',
    label: 'Combo 2',
    title: 'Mắm Nam Bộ',
    image: namBo,
    description: 'Demo combo gồm 3 sản phẩm mắm đặc trưng miền Nam, thiên về vị đậm, thơm và dễ phối món.',
  },
  {
    id: 'combo-3',
    label: 'Combo 3',
    title: 'Mắm Trung Bộ',
    image: trungBo,
    description: 'Demo combo gồm 3 sản phẩm mắm đặc trưng miền Trung, đậm đà, bắt vị và hợp món kho, món chấm.',
  },
  {
    id: 'combo-choose',
    label: 'Lựa chọn sản phẩm',
    title: 'Tự chọn combo',
    description: 'Chọn thêm sản phẩm theo nhu cầu để ghép thành combo phù hợp hơn cho gia đình bạn.',
    cta: {
      label: 'Xem thêm sản phẩm',
      href: '#product',
    },
  },
]

const filterTabs = ['ALL', 'FRESH', 'FLOWER', 'WOOD', 'AMBER', 'DRESSING FUMES', 'GOLD LABEL', 'SUMMER EXCLUSIVES']

function MiniCombo() {
  return (
    <section className="mini-combo" aria-labelledby="mini-combo-title" id="mini-combo">
      <div className="mini-combo__frame">
        <div className="mini-combo__topbar">
          <div className="mini-combo__section-name">
            <p className="mini-combo__eyebrow">Mini combo</p>
            <h2 className="mini-combo__title" id="mini-combo-title">
              Gợi ý combo mắm theo vùng
            </h2>
          </div>

          <div className="mini-combo__tabs" aria-label="Danh mục">
            {filterTabs.map((tab) => (
              <span key={tab} className={`mini-combo__tab ${tab === 'ALL' ? 'is-active' : ''}`}>
                {tab}
              </span>
            ))}
          </div>
        </div>

        <div className="mini-combo__grid">
          {comboCards.map((card) => (
            <article key={card.id} className={`mini-combo__panel ${card.cta ? 'is-choice' : ''}`}>
              <div className="mini-combo__panel-head">
                <span className="mini-combo__panel-label">{card.label}</span>
              </div>

              <div className="mini-combo__panel-visual">
                {card.image ? <img src={card.image} alt={card.title} /> : null}
              </div>

              {card.cta ? (
                <a className="mini-combo__button mini-combo__button--center" href={card.cta.href}>
                  {card.cta.label}
                </a>
              ) : null}

              <div className="mini-combo__panel-body">
                <div className="mini-combo__info-card">
                  <h3 className="mini-combo__panel-title">{card.title}</h3>
                  <p className="mini-combo__description">{card.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MiniCombo
