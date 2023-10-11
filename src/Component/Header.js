import { GoMarkGithub } from "react-icons/go";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { SiQiita } from "react-icons/si";

const Header = () => {
  return (
    <section className="header-section" id="top">
      <span className="header__subtitle">Hi, I'm Yuri</span>
      <h1 className="header__title">
        <span className="highlight">Frontend / React Developer</span>
      </h1>

      <div className="header-icon-div">
        <a
          href="https://github.com/YuriOda"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GoMarkGithub className="header-icon" />
        </a>
        <a href="mailto: yuri.oda.lily@gmail.com">
          <FaEnvelope className="header-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/yuri-oda/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="header-icon" />
        </a>
      </div>
    </section>
  );
};

export default Header;
