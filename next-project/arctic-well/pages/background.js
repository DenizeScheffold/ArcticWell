import Image from 'next/image'
import { bgWrap, bgText } from '../styles/styles.module.css'

const Background = () => (
  <div>
    <div className={bgWrap}>
      <Image
        alt="background"
        src="/landing-page-background.png"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  </div>
)

export default Background
