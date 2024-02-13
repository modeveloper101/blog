import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
// import Subscribe from "./Subscribe";

const Layout = () => {
  return (
    <>
      <div className="mobile-first">
        <div>
          <h1 className="md:text-[8rem] lg:text-[12rem] font-[700] leading-[0.7]">
            Cielo
          </h1>
          <h1 className="md:text-[8rem] lg:text-[12rem] font-[700] GFG leading-[1] text-white">
            Cielo
          </h1>
        </div>
        <span className="text-base xl:text-lg text-white text-center font-[300] absolute bottom-10">
          While we polish up the desktop version, take a
          stroll <br /> through our site on your mobile device for a delightful
          experience.
        </span>
        {/* <Subscribe>Notify Me</Subscribe> */}
      </div>
      <Header />
      <main className="App bg-[#010101] text-[#E6E4E0]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
