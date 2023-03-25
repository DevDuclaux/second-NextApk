import Head from './components/header.js'
import Entete from './components/entete.js'
import Footer from './components/footer.js'


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      
      {/* -------appel de du head */}
      <Entete></Entete>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  )
}
