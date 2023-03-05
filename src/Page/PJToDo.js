import { useNavigate } from "react-router-dom";
import { FaGlobe, FaGithub, FaSass, FaReact, FaFigma } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";

import Footer from "../Component/Footer";
import ScreenShotMobileLight from "../assets/todo-mobile-light.png";
import ScreenShotMobileDark from "../assets/todo-mobile-dark.png";
import Gif from "../assets/todo-gif.gif";

// import ScreenShotLight from "../assets/todo-light.png";
// import ScreenShotDark from "../assets/todo-dark.png";

const PJToDo = () => {
  window.scrollTo(0, 0);
  const navigate = useNavigate();

  const gobackHandler = () => {
    navigate(-1);
  };

  return (
    <>
      <section id="yomulog">
        {/* NAV */}
        <div className="pj-navigation">
          <span onClick={gobackHandler} className="pj-back">
            Back
          </span>
        </div>

        <h3 className="project-title">To Do List</h3>

        {/* DETAILS */}
        <div className="pjd">
          <div className="pjd-view">
            <div>
              <a
                href="https://github.com/YuriOda/to-do-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="pjd-icon" />
              </a>
              <a
                href="https://todo-app-one-dusky.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGlobe className="pjd-icon" />
              </a>
            </div>

            {/* GIF */}

            <div className="pjd-multi-div">
              <img
                src={Gif}
                alt="To Do List Gif"
                className="pjd-screenshot-gif"
              />
              <div className="todo-screenshot-container">
                <img
                  className="todo-mobile"
                  src={ScreenShotMobileLight}
                  alt="To Do List Screenshot mobile light theme"
                />
                <img
                  className="todo-mobile todo-dark"
                  src={ScreenShotMobileDark}
                  alt="To Do List Screenshot mobile dark theme"
                />
              </div>
            </div>

            {/* Screenshot 4 ver */}
            {/* <div className="pjd-multi-div">
              <div className="pjd-screenshot-row">
                <img
                  className="pjd-screenshot-todo"
                  src={ScreenShotLight}
                  alt="To Do List Screenshot light theme"
                />
                <img
                  className="pjd-screenshot-todo-small"
                  src={ScreenShotMobileLight}
                  alt="To Do List Screenshot mobile light theme"
                />
              </div>

              <div className="pjd-screenshot-row">
                <img
                  className="pjd-screenshot-todo"
                  src={ScreenShotDark}
                  alt="To Do List Screenshot dark theme"
                />

                <img
                  className="pjd-screenshot-todo-small"
                  src={ScreenShotMobileDark}
                  alt="To Do List Screenshot mobile dark theme"
                />
              </div>
            </div> */}
          </div>

          <div>
            <div className="pjd-title-border">
              <h2 className="pjd-title">Tools</h2>
            </div>
            <div className="pjd-textbox">
              <table className="pjd-table">
                <tbody>
                  <tr>
                    <th className="pjd-table-header">React</th>
                    <th className="pjd-table-header">Sass</th>
                    <th className="pjd-table-header">Firebase</th>
                    <th className="pjd-table-header">Figma</th>
                  </tr>
                  <tr>
                    <td className="pjd-table-icon">
                      <FaReact className="pjd-table-icon__react" />
                    </td>
                    <td className="pjd-table-icon">
                      <FaSass className="pjd-table-icon__sass" />
                    </td>
                    <td className="pjd-table-icon">
                      <SiFirebase className="pjd-table-icon__firebase" />
                    </td>
                    <td className="pjd-table-icon">
                      <FaFigma />
                    </td>
                  </tr>
                  <tr>
                    <td className="pjd-table-detail">
                      <p>Context</p>
                    </td>
                    <td className="pjd-table-detail">&nbsp;</td>
                    <td className="pjd-table-detail">
                      <p>Realtime DB</p>
                    </td>
                    <td className="pjd-table-detail">&nbsp;</td>
                  </tr>
                </tbody>
              </table>

              <div className="pjd-duration">
                <p className="pjd-subtitle">制作期間</p>
                <p className="pjd-duration__time">2 weeks</p>
              </div>
            </div>
          </div>

          {/* CONCEPT */}
          <div>
            <div className="pjd-title-border">
              <h2 className="pjd-title">Detail</h2>
            </div>

            <div className="pjd-textbox">
              <p>
                　本プロジェクトは
                <a
                  href="https://www.frontendmentor.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Frontend Mentor
                </a>
                の課題のひとつです。Frontend
                Mentorとは、個人開発のプロジェクト向けにデザインと機能を設計した課題を提供してくれるサービスで、指定された機能を自身で1から作成するものです。今回使用した課題は
                <a
                  href="https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  こちら
                </a>
              </p>
              <p>
                　まず課題ページよりプロジェクト概要と背景用の画像をダウンロードしました。フォントやdivのサイズなどは情報がないため、アプリのスクリーンショットをとりFigmaで同一のものを作ることでエレメントのサイズや色を詳細に確認し、Google
                fontsから似たフォントを探しました。
              </p>
              <p>
                <span className="code">create-react-app</span>
                よりプロジェクトの作成を開始しました。
              </p>
            </div>
          </div>

          <div>
            <div className="pjd-title-border">
              <h2 className="pjd-title">Object</h2>
            </div>

            <div className="pjd-textbox">
              <ul className="pjd-list">
                <li>
                  <strong>Tutorial Hellからの脱出</strong>
                  <p>
                    学びを進めるほどにまだ知識が十分でないと感じてしまい、なかなかプロジェクトに着手できずにいました。そんな状況を打破したいと考えていたときにFrontend
                    Mentorを見つけ、まずはToDoAppから作成することにしました。
                  </p>
                </li>
                <li>
                  <strong>React Contextの実践</strong>
                  <p>
                    state, context, redux, custom
                    hookの4つの用途や違いがまだ不明瞭でした。useContextは頻繁なstate変更には向いていないものの、内容理解を優先しまずはReduxを使わずにアプリを作成することにしました。
                  </p>
                </li>
                <li>
                  <strong>async, await</strong>
                  <p>
                    fetchAPIを用いてGET, PUT,
                    POSTすることは出来ていたのですが、まだ不明確だったため本アプリのデータ取得・書き換えにおいてはfethを用いて練習することにしました。
                  </p>
                </li>
              </ul>
            </div>

            <div className="pjd-title-border">
              <h2 className="pjd-title">Struggles</h2>
            </div>
            {/* STRUGGLES */}
            <div className="pjd-textbox">
              <p className="pjd-subtitle">特に苦労した点</p>

              <p className="pjd-p-title">Drag & Drop機能</p>
              <p>
                　ドラッグ&ドロップ機能については初めて扱うため、まずは方法についてリサーチする必要がありました。
                <a
                  href="https://openbase.com/categories/js/best-react-drag-and-drop-libraries?vs=react-draggable%2Csortablejs%2Creact-beautiful-dnd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  いくつかの記事
                </a>
                を参考にライブラリを調べましたが、使いやすさと公式ドキュメント・チュートリアルが充実していることから
                <span className="code">react-beautiful-dnd</span>
                を選定しました。この機能を実装する上で難しかった点は、タスクの順番をどのように指定するかです。入力したタスクはfirebaseにfetchPOSTで送信していたのですが、このオブジェクト名は重複を避けるためにランダムに生成された特有の文字列であるため、
                <a
                  href="https://codesandbox.io/s/k260nyxq9v"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  こちら
                </a>
                のようにindex番号やobject名を使用してタスクの順番を指定することができませんでした。
              </p>
              <p>
                　まず考えたのは、このオブジェクト名を毎回アレイで書き換えることで固有の文字列ではなく数字にしてしまう方法でした。しかしこれはそもそも固有の文字列を付与している意味がなくなることと、当然並び替え後にタスクを追加・削除すると同じindex番号が生まれてしまいエラーが発生することから別の方法をとることにしました。
              </p>
              <p>
                　次に考えたのは、firebase上でタスクの順番を入れ替えるのではなく、firebase上にタスクIDだけをPOSTし、ページを読み込むときにこのIDの順番にタスクを並び替えて表示をさせることです。このアイディアは最終的に機能したのですが、次に下記の問題に直面しました。
              </p>
              <p className="pjd-p-title margin-top">FetchAPIとasync, await</p>
              <p>
                　並び替え機能を持たせるために上記の方法を採用することにしたのですが、ページレンダー時にfirebaseからタスクの表示順のデータを取得し、その後にその順番通りにタスクを表示させることが難しかったです。まず最初に
                <span className="code">useEffect</span>
                内に①タスクの順番を取得するfetch、②タスクの内容を取得&①の順番に表示させるfetchを順に並べたのですが、ロードのタイミングによっては②の情報取得が先に完了してしまい、思うようにタスクを表示できませんでした。dataを処理するfunctionをcomponent外に作ったり順番やクリーンさを見直したりしたのですがうまくいかず、useEffectのdependencyによるinfinite
                loopに陥るなど苦戦しました。
              </p>
              <p>
                　最終的には①を取得後に②を実行できるようasync, awaitの復習を行い
                <span className="code">useEffect</span>
                内に
                <a
                  href="https://github.com/YuriOda/to-do-app/blob/main/src/App.js"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  async functionをひとつ作る
                </a>
                (line23)ことで解決ができました。ただ今回App.js内にあるfunctionにはいくつか同じようなコードがあることと、内容が多すぎると感じるため今後はよりこういった点を改善することを念頭に学習を進めていきます。
              </p>
            </div>
          </div>
          <span onClick={gobackHandler} className="pj-back">
            Back
          </span>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PJToDo;
