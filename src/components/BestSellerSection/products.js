import namBoImage from '../../assets/section-Bestseller/Nam_Bo/mam-ca-linh.jpg'
import trungBoImage from '../../assets/section-Bestseller/Trung_Bo/thit-kho-mam-ruoc.jpg'
import bacBoImage from '../../assets/section-Bestseller/Bac_Bo/mam_tep.jpeg'

const ingredientImages = import.meta.glob(
  '../../assets/section-Bestseller/*/Nguyen_Lieu/*.{jpg,jpeg,png,webp}',
  {
    eager: true,
    import: 'default',
  },
)

const getIngredientNumber = (path) => {
  const match = path.match(/nguyen_lieu_(\d+)/i)
  return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER
}

const getIngredients = (folderName) =>
  Object.entries(ingredientImages)
    .filter(([path]) => path.includes(`/section-Bestseller/${folderName}/Nguyen_Lieu/`))
    .sort(([firstPath], [secondPath]) => getIngredientNumber(firstPath) - getIngredientNumber(secondPath))
    .map(([path, src], index) => ({
      src,
      alt: `${folderName} nguyên liệu ${index + 1}`,
      name: path.split('/').pop(),
    }))

const products = [
  {
    id: 1,
    name: 'Mắm cá linh Nam Bộ',
    price: '135.000đ',
    description: 'Vị đậm, thơm, hợp cơm trắng và rau luộc. Đóng hũ đẹp, dễ làm quà biếu.',
    image: namBoImage,
    alt: 'Mắm cá linh Nam Bộ',
    ingredients: getIngredients('Nam_Bo'),
  },
  {
    id: 2,
    name: 'Mắm ruốc miền Trung',
    price: '125.000đ',
    description: 'Mùi thơm đặc trưng, hậu ngọt nhẹ. Phù hợp chấm, xào và nêm nếm món ăn.',
    image: trungBoImage,
    alt: 'Mắm ruốc miền Trung',
    ingredients: getIngredients('Trung_Bo'),
  },
  {
    id: 3,
    name: 'Mắm tép Tây Bắc',
    price: '145.000đ',
    description: 'Hương vị đậm đà, cá tính hơn, hợp gu ăn cùng thịt luộc, xôi và đồ nướng.',
    image: bacBoImage,
    alt: 'Mắm tép Tây Bắc',
    ingredients: getIngredients('Bac_Bo'),
  },
]

export default products
