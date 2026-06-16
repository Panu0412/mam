import namBoImage from '../../assets/Nam_Bo/mam-ca-linh.jpg'
import trungBoImage from '../../assets/Trung_Bo/thit-kho-mam-ruoc.jpg'
import bacBoImage from '../../assets/Bac_Bo/mam_tep.jpeg'

const products = [
  {
    id: 1,
    name: 'Mắm cá linh Nam Bộ',
    price: '135.000đ',
    description: 'Vị đậm, thơm, hợp cơm trắng và rau luộc. Đóng hũ đẹp, dễ làm quà biếu.',
    image: namBoImage,
    alt: 'Mắm cá linh Nam Bộ',
  },
  {
    id: 2,
    name: 'Mắm ruốc miền Trung',
    price: '125.000đ',
    description: 'Mùi thơm đặc trưng, hậu ngọt nhẹ. Phù hợp chấm, xào và nêm nếm món ăn.',
    image: trungBoImage,
    alt: 'Mắm ruốc miền Trung',
  },
  {
    id: 3,
    name: 'Mắm tép Tây Bắc',
    price: '145.000đ',
    description: 'Hương vị đậm đà, cá tính hơn, hợp gu ăn cùng thịt luộc, xôi và đồ nướng.',
    image: bacBoImage,
    alt: 'Mắm tép Tây Bắc',
  },
]

export default products
