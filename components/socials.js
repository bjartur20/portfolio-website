import Image from 'next/image'
import styles from './socials.module.css'

export default function Socials() {
  return (
    <div className={styles.socialIcons}>
        <a href="https://www.linkedin.com/in/bjartur-%C3%BE-99ab9313b/">
          <Image
            src="/images/linkedin-logo.png"
            alt="Linkedin"
            className={styles.socialIcon}
            height={144}
            width={144}
          />
        </a>
        <a href="https://github.com/bjartur20">
          <Image
            src="/images/github-logo.png"
            alt="Github"
            className={styles.socialIcon}
            height={144}
            width={144}
          />
        </a>
        <a href="mailto:bjartur20@gmail.com">
          <Image
            src="/images/gmail-logo.png"
            alt="Email"
            className={styles.socialIcon}
            height={144}
            width={144}
          />
        </a>
      </div>
  )
}