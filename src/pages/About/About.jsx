import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import ParallaxSection from '../../components/ParallaxSection/ParallaxSection.jsx'
import './About.css'

import aboutImageOne from '../../assets/about_us/bayern-5544-2763.jpeg.webp'
import aboutImageTwo from '../../assets/about_us/bayern-munich.jpg'
import aboutImageThree from '../../assets/about_us/hq720.jpg'
import aboutImageFour from '../../assets/about_us/images.jpg'
import aboutImageFive from '../../assets/about_us/hq720 - Copy.jpg'
import aboutImageSix from '../../assets/about_us/images - Copy.jpg'

const textItems = [
  {
    id: 'about-1',
    kicker: 'About House',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere sapien nec volutpat hendrerit. Turpis libero vulputate nibh, a tincidunt metus lorem sit amet sem.',
  },
  {
    id: 'about-2',
    kicker: 'Inspiration',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu turpis sed magna volutpat pulvinar. Sed convallis ante sit amet mauris sodales, vel feugiat lorem luctus.',
  },
  {
    id: 'about-3',
    kicker: 'Culture',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mollis augue id arcu volutpat, sit amet hendrerit mi feugiat. Donec bibendum accumsan orci vitae suscipit.',
  },
  {
    id: 'about-4',
    kicker: 'Craft',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare lacus et finibus facilisis. Justo purus sagittis erat, at laoreet purus justo ac nibh.',
  },
  {
    id: 'about-5',
    kicker: 'Memory',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus magna vel massa pharetra, vitae porttitor turpis convallis. Curabitur rhoncus lectus sit amet lorem tempor.',
  },
  {
    id: 'about-6',
    kicker: 'Details',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies nibh in massa fermentum, sed pretium mi aliquam. Donec vitae nibh non turpis tristique malesuada.',
  },
  {
    id: 'about-7',
    kicker: 'Rhythm',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida sem at felis dignissim, non faucibus magna feugiat. Integer luctus magna a justo ullamcorper, sit amet volutpat.',
  },
  {
    id: 'about-8',
    kicker: 'Texture',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Aliquam erat volutpat. Nunc efficitur posuere eros, vitae gravida lectus laoreet id.',
  },
  {
    id: 'about-9',
    kicker: 'Archive',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed neque sit amet lorem fermentum accumsan. Sed dapibus tellus sit amet dui tincidunt, id tempor nibh dictum.',
  },
]

const imageItems = [
  { id: 'image-1', number: '1', src: aboutImageOne, alt: 'About us visual 1' },
  { id: 'image-2', number: '2', src: aboutImageTwo, alt: 'About us visual 2' },
  { id: 'image-3', number: '3', src: aboutImageThree, alt: 'About us visual 3' },
  { id: 'image-4', number: '4', src: aboutImageFour, alt: 'About us visual 4' },
  { id: 'image-5', number: '5', src: aboutImageFive, alt: 'About us visual 5' },
  { id: 'image-6', number: '6', src: aboutImageSix, alt: 'About us visual 6' },
]

function About() {
  return (
    <div className="about-page">
      <Header />

      <main className="about-page__main">
        <div className="about-page__content">
          <ParallaxSection textItems={textItems} imageItems={imageItems} />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default About
