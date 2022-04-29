import Image from 'next/image'
import { bgWrap, bgText } from '../styles/styles.module.css'

const Background = () => (
  <div>
    <div className={bgWrap}>
      <Image
        alt="background"
        src="/landing-page-background.png"
        layout="responsive"
        width={500}
        height={743}
        quality={100}
      />
    </div>
  </div>
)

export default Background
