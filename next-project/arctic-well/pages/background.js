import Image from 'next/image'
import { bgWrap, bgText } from '../styles/styles.module.css'

// @TODO: might be better to apply the background through css instead of as a page. Refactor needed.
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
