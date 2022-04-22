import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className='container main-container'>
        <Component {...pageProps} />
      </main>
      <Footer></Footer>
    </>
  )
}

export default MyApp
