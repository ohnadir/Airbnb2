import '../styles/globals.css'
import 'antd/dist/antd.css';
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import 'antd/dist/antd.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { store, wrapper } from '../store'
import { Provider } from "react-redux";
import MainLayout from '../Components/Layouts/MainLayout';
import Default from '../Components/Layouts/Default';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || Default;
  const stripePromise = loadStripe('sk_test_51L2fV2J4Q1QgQO2Dq4mULWGAjBR6MGD0ZLwHzfms34YrEAJepxbKdyQNG4QuUJdE89R7P5Ny2PNkmF0TLXrVdNoX00e0SvWPic');
  return (
    <>
      <Provider store={store}>
        <MainLayout>
          <Layout>
            <Elements stripe={stripePromise}>
              <Component {...pageProps} />
            </Elements>
          </Layout>
        </MainLayout>
      </Provider>
    </>
  )
}

export default wrapper.withRedux(MyApp);
