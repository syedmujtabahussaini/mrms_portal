import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import Footer from "@/components/dashboard/Footer";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <Sidebar />
      {children}
      <Footer />
    </>
  );
}
