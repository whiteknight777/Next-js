import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
  return (
    <div className="bg-indigo-300 min-h-screen">
      <Head>
        <title>Dashboard</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Teko:wght@400;500&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout >
       This is dashboard content
      </Layout>

    </div>
  )
}
