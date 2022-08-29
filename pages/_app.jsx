import '../styles/globals.scss'
import NavigationBar from './Components/NavigationBar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavigationBar/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
