import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import SvgEnvelop from "../assets/svg/envelope-regular";

const Navigation = () => {
  return (
    <>
      <div className="navigation-section">
        <nav>
          <div className="nav-left">
            <Link to="/">
              <img src={Logo} alt="Logo Img" className="nav-left__img" />
            </Link>
            <span className="nav-left__title">Yuri ODA</span>
          </div>

          <div className="nav-right">
            <ul>
              <li className="nav-right__item">
                <Scroll to="project" smooth={true} duration={500} offset={-80}>
                  Projects
                </Scroll>
              </li>
              <li className="nav-right__item">
                <Scroll to="about" smooth={true} duration={500} offset={-80}>
                  About
                </Scroll>
              </li>
              <li className="nav-right__item">
                <a
                  href="https://lily2028.hatenablog.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Memo
                </a>
              </li>
              <li className="nav-right__item">
                <Scroll to="top" smooth={true} duration={500}>
                  Home
                </Scroll>
              </li>

              <li className="nav-right__svg">
                <a href="mailto: yuri.oda.lily@gmail.com">
                  <SvgEnvelop />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
