import GuestLayout from "@layouts/guest";
import "@styles/globals.css";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout)
    return Component.getLayout(<Component {...pageProps} />);

  return (
    <>
      <GuestLayout>
        <Component {...pageProps} />
      </GuestLayout>
    </>
  );
}

export default MyApp;
