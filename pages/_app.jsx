import '../styles/globals.scss'
import NavigationBar from './Components/NavigationBar'
import Footer from './Components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavigationBar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp
