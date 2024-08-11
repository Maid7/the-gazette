// -import components
import Navbar from "../components/Navbar";
// -import Outlet component
import { Outlet } from "react-router-dom";
// -import Footer component
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
