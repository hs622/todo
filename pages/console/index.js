import Head from "next/head";
import Footer from "@components/Footer";

export default function index() {
  return (
    <div className="container">
      <Head>
        <title>Welcome to console</title>
        <meta
          name="description"
          content="Resoucres management tool for client"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="main">
        <p style={{ fontSize: "22px" }}>
          Please wait a while we set up the console for you...
        </p>
      </div>
    </div>
  );
}

index.getLayout = function PageLayout(Page) {
  return (
    <>
      {Page}
      <Footer />
    </>
  );
};
