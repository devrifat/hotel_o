

// import { AppProvider, Frame } from '@shopify/polaris';
// import '@shopify/polaris/build/esm/styles.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import '../assets/style/sass/index.sass';

function MyApp({ Component, pageProps }) {
  return <>
      <ToastContainer />
      <Component {...pageProps} />
    </>
}
export default MyApp

