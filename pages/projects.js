import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>

      <h1>Projects</h1>
      <a href="https://github.com/bjartur20/TGRA-PA5">Solar System Animation/Simulation in OpenGL & Python</a>
      <br/>
      <a href="https://github.com/ymirthor/T-622-ARTI_Project2">Breakthrough AI in Java</a>
      <br/>
      <a>Basketball game orginization service in C#, Python & JavaScript</a> 
      {/* TODO: add upload the above project to GitHub and provide link */}
    </Layout>
  )
}
