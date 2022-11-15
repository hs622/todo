import Head from "next/head";
import Footer from "@components/Footer";

export default function index() {
  return (
    <>
      <Head>
        <title>Welcome to console</title>
        <meta
          name="description"
          content="Resoucres management tool for client"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
    </>
  );
}

// index.getLayout = function PageLayout(Page) {
//   return (
//     <>
//       {Page}
//       <Footer />
//     </>
//   );
// };
