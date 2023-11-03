import { FaSass, FaReact, FaFigma, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

const About = () => {
  return (
    <section id="about">
      <h3 className="section-title">About</h3>

      <div className="about-summary">
        <div className="about-skills">
          {/* SKILLS */}
          <div className="about-skill-row">
            <span className="about-skill-title">Skills</span>
            <table className="about-skill-table">
              <tbody>
                <tr>
                  <td className="about-skill-td">React</td>
                  <td className="about-skill-td">JavaScript</td>
                  <td className="about-skill-td">HTML</td>
                  <td className="about-skill-td">CSS</td>
                  <td className="about-skill-td">Sass</td>
                  <td className="about-skill-td">Figma</td>
                </tr>
                <tr className="about-skill-icon">
                  <td>
                    <FaReact />
                  </td>
                  <td>
                    <SiJavascript />
                  </td>
                  <td>
                    <FaHtml5 />
                  </td>
                  <td>
                    <FaCss3Alt />
                  </td>
                  <td>
                    <FaSass />
                  </td>
                  <td>
                    <FaFigma />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* LANGUAGE */}
          <div className="about-skill-row">
            <span className="about-skill-title">Language</span>
            <div className="about-skill-language">
              <div>
                <span className="about-skill-language-title">English</span>
                <span className="about-skill-language-toeic">TOEIC910</span>
              </div>
              <div>
                <span className="about-skill-language-title">Japanese</span>
                <span className="about-skill-language-jpn">Native</span>
              </div>
            </div>
          </div>

          {/* Interested */}
          <div className="about-skill-row">
            <span className="about-skill-title">Others</span>
            <div className="about-skill-others-text">
              <p>Astro, Flutter学習中</p>
              <p>Hobbies ... ゲーム / 猫吸い / 読書</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
