import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import Navigation from "./component/Navigation";
import NavigationSmall from "./component/NavigationSmall";
import Footer from "./component/Footer";

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
