import Image from 'next/image'
import { bgWrap, bgText } from '../styles/styles.module.css'

// @TODO: might be better to apply the background through css instead of as a page. Refactor needed.
const Background = () => (
  <div>
    <div className={bgWrap}>
      <Image
        alt="background"
        src="/arctic_background_new.png"
        layout="responsive"
        width={376}
        height={752}
        quality={100}
      />
    </div>
  </div>
)

export default Background
