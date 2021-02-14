import { useRouter } from 'next/router'
import Footer from '../components/footer'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default function Layout({children, ...props}) {
  return (
    <div className="flex"> 
        <Sidebar />
        <div className="content flex flex-col flex-auto">
            <Header />
            <main >
                {children}
            </main>
            <Footer />
        </div>

    </div>
  )
}

export async function getStaticProps() {
    return {
      props: {}, // will be passed to the page component as props
    }
  }
