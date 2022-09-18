import { useEffect } from 'react';
import Navbar from '../components/Navbar'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
