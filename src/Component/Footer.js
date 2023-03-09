import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiQiita } from "react-icons/si";

const Footer = () => {
  return (
    <section className="footer">
      <p className="footer-name">Yuri ODA</p>
      <a href="mailto: yuri.oda.lily@gmail.com">
        <FaEnvelope className="footer-icon" />
      </a>
      <a
        href="https://github.com/YuriOda"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GoMarkGithub className="footer-icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/yuri-oda/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="footer-icon" />
      </a>
      <a
        href="https://qiita.com/lily28"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiQiita className="footer-icon" />
      </a>
    </section>
  );
};

export default Footer;
