import { useState, useEffect } from "react";
import { Link as Scroll } from "react-scroll";

//Icon
import { GoMarkGithub } from "react-icons/go";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import Logo from "../assets/logo.png";

const NavigationSmall = () => {
  const [menuShown, setMenuShown] = useState(false);

  const showMenuHandler = () => {
    setMenuShown((prev) => !prev);
  };

  //ボタン以外をクリックしたときにメニューを閉じる
  useEffect(() => {
    const onCloseMenuHandler = (e) => {
      if (
        e.target.className !== "navigation__button" &&
        e.target.className !== "navigation__icon"
      ) {
        setMenuShown(false);
      }
    };
    document.body.addEventListener("click", onCloseMenuHandler);

    return () => document.body.removeEventListener("click", onCloseMenuHandler);
  }, []);

  return (
    <div className="navigation" style={{ width: menuShown ? "100%" : "0" }}>
      <div className="navigation__button" onClick={showMenuHandler}>
        <span className="navigation__icon">&nbsp;</span>
      </div>

      {menuShown && (
        <>
          <nav className="nav">
            <img src={Logo} alt="Logo Img" className="nav__logo" />
            <ul className="nav__list">
              <li className="nav__item">
                <Scroll
                  to="project"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={showMenuHandler}
                >
                  Projects
                </Scroll>
              </li>
              <li className="nav__item">
                <Scroll
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={showMenuHandler}
                >
                  About
                </Scroll>
              </li>

              <li className="nav__item">
                <a
                  href="https://lily2028.hatenablog.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Memo
                </a>
              </li>
              <li className="nav__item">
                <Scroll
                  to="top"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={showMenuHandler}
                >
                  Home
                </Scroll>
              </li>
            </ul>
            <div className="nav__links">
              <a
                href="https://github.com/YuriOda"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GoMarkGithub className="nav__links-icon" />
              </a>
              <a href="mailto: yuri.oda.lily@gmail.com">
                <FaEnvelope className="nav__links-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/yuri-oda/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="nav__links-icon" />
              </a>
            </div>
          </nav>
        </>
      )}
    </div>
  );
};

export default NavigationSmall;
