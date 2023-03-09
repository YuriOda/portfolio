import { FaSass, FaReact, FaFigma, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import ProfileImg from "../assets/profile.jpg";

const About = () => {
  return (
    <section id="about">
      <h3 className="section-title">About</h3>

      <div className="about-summary">
        <img src={ProfileImg} alt="Profile" className="about-img" />
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
              <p>Other skills ... TypeScriptとAstro.jsが気になっています</p>
              <p>Hobbies ... ゲーム / 猫吸い / 読書</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-intro">
        <p className="margin-bottom">
          　昨年、未経験フロントエンドエンジニアの方の記事を拝見したことをきっかけに、開発へ深く興味を持ちました。元々中学生の頃に簡単なWebサイトを作成することが趣味だったのですが、独学で学習を開始したところ魅力にはまり現在就職活動を行なっています。
        </p>
        <p className="margin-bottom">
          　難しい問題が沢山あるぶん、新しい技術を学んだり、エラーを解決できた瞬間がとても楽しく感じています。コンサルティング営業としての経験からプロジェクトを通じてどんな課題が解決できるか、またはすべきか、デザインは見やすく使いやすいものかを意識しながら開発することを心がけています。
        </p>

        <p>　最後までご覧いただき、ありがとうございます ☺️</p>
      </div>
    </section>
  );
};

export default About;
