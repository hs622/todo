import Head from "next/head";
import AuthLayout from "@layouts/auth";

export default function index() {
  return (
    <>
      <Head>
        <title>Welcome to console</title>
        <meta
          name="description"
          content="Resoucres management tool for client"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div >main</div>
    </>
  );
}

index.getLayout = function PageLayout(Page) {
  return (
    <AuthLayout>
      <>{Page}</>
    </AuthLayout>
  );
};
