import Layout from "@layouts/guest";
import "@styles/globals.css";
import "@styles/layouts.css";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout)
    return Component.getLayout(<Component {...pageProps} />);

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
