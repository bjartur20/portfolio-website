import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>

      <h1>About</h1>
      <p>I'm currently situated in Reykjavik, Iceland, working as a full-stack developer for <a href="https://bdc.is/">Borealis Data Center</a> while finishing my BSc in Software Engineering at <a href="https://www.ru.is/">Reykjavik University</a>.</p>
    </Layout>
  )
}
