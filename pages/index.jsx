import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome todo</title>
        <meta name="description" content="Welcome todo description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-[calc(100vh-164px)] md:h-[calc(100vh-144px)]">
        main page
      </div>
    </>
  );
}
