import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import Navigation from "../Component/Navigation";
import NavigationSmall from "../Component/NavigationSmall";
import Footer from "../Component/Footer";

const RootLayout = () => {
  const isPhone = useMediaQuery({
    query: "(max-width: 670px)",
  });

  return (
    <>
      {!isPhone && <Navigation />}
      {isPhone && <NavigationSmall />}
      {/* <div className="main-wrapper"> */}
      <Outlet />
      <Footer />
      {/* </div> */}
    </>
  );
};

export default RootLayout;
