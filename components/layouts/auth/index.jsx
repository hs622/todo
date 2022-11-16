import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function AuthLayout({ children }) {
  return (
    <>
      <Header />
      <Sidebar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
