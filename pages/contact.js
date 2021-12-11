import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>

      <h1>Contact</h1>
      <div class={utilStyles.socialIcons}>
        <a href="https://github.com/bjartur20">
          <Image
            src="/images/github-logo.png"
            alt="Github"
            className={utilStyles.socialIcon}
            height={144}
            width={144}
          />
        </a>
        <a href="https://www.linkedin.com/in/bjartur-%C3%BE-99ab9313b/">
          <Image
            src="/images/linkedin-logo.png"
            alt="Linkedin"
            className={utilStyles.socialIcon}
            height={144}
            width={144}
          />
        </a>
        <a href="mailto:bjartur20@gmail.com">
          <Image
            src="/images/gmail-logo.png"
            alt="Email"
            className={utilStyles.socialIcon}
            height={144}
            width={144}
          />
        </a>
      </div>
    </Layout>
  )
}
