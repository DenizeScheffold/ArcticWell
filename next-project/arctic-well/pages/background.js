import Image from 'next/image'
import { bgWrap } from '../styles/styles.module.css'

// @TODO: might be better to apply the background through css instead of as a page. Refactor needed.
const Background = () => (
  <div>
    <div className={bgWrap}>
      <Image
        alt="background"
        src="/background_landingpage.png"
        layout="responsive"
        width={379.3}
        height={702}
        quality={100}

      />
    </div>
  </div>
)

export default Background
