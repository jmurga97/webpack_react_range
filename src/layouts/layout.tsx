import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <main className={`text-black`}>
      <div className="bg-white -z-10 fixed top-0 left-0 w-full h-full"></div>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
