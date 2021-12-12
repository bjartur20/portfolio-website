import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import Socials from '../components/socials'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>

      <h1>Contact</h1>
      <Socials></Socials>
    </Layout>
  )
}
