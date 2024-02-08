import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="App bg-[#010101] text-[#E6E4E0]">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
