import { Outlet } from "react-router-dom";
import Navigation from "../Component/Navigation";
import Footer from "../Component/Footer";

const RootLayout = () => {
  return (
    <>
      <Navigation />
      <div className="main-wrapper">
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
