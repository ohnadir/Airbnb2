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

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || Default;
  return (
    <>
      <Provider store={store}>
        <MainLayout>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MainLayout>
      </Provider>
    </>
  )
}

export default wrapper.withRedux(MyApp);
