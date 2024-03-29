import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <main className={`text-white`}>
      <div className="bg-gradient-to-r from-purple-700 to-purple-900 -z-10 fixed top-0 left-0 w-full h-full"></div>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
