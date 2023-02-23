import { useNavigate } from "react-router-dom";
import { FaGlobe, FaGithub, FaSass, FaReact, FaFigma } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";

import Footer from "../Component/Footer";
import ScreenShot from "../assets/yomu-log.png";
import Design from "../assets/yomu-log-design.png";

const PJYomuLog = () => {
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

        <h3 className="section-title">Yomu Log</h3>

        {/* DETAILS */}
        <div className="pjd">
          <div className="pjd-view">
            <div>
              <a
                href="https://github.com/YuriOda/yomu-log"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="pjd-icon" />
              </a>
              <a
                href="https://yomu-log.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGlobe className="pjd-icon" />
              </a>
            </div>
            <p>ログインアドレス：test@test.com</p>
            <p>ログインパスワード：testpassword</p>
            <a
              href="https://yomu-log.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="pjd-screenshot"
                src={ScreenShot}
                alt="Yomu log Screenshot"
              />
            </a>
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
                      <p>Router</p>
                      <p>Redux</p>
                    </td>
                    <td className="pjd-table-detail">&nbsp;</td>
                    <td className="pjd-table-detail">
                      <p>Realtime DB</p>
                      <p>Authentication</p>
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

          <div>
            <div className="pjd-title-border">
              <h2 className="pjd-title">Concept</h2>
            </div>

            <div className="pjd-textbox">
              <p className="pjd-subtitle">コンセプト</p>
              <ul className="pjd-list">
                <li>
                  <a
                    href="https://developers.google.com/books/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Books API
                  </a>{" "}
                  を使用し、Yomu Log上に本棚を作成
                </li>
                <li>実物の本棚同様、一目で多くのタイトルが閲覧可能なUI</li>
                <li>
                  読書中に感じたことや、読み返したり、久しぶりに読んだ時などにも追加して読書感想文を育てます
                </li>
              </ul>

              <p className="pjd-subtitle">このプロジェクトを作成した目的</p>
              <ul className="pjd-list">
                <li>APIを使用したプロジェクトの作成</li>
                <li>Reduxの実践</li>
                <li>Router v6.8を学びプロジェクトに取り入れる</li>
                <li>
                  <a
                    href="https://firebase.google.com/docs/auth/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Authentication
                  </a>
                  機能を学ぶ
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="pjd-title-border">
              <h2 className="pjd-title">Struggles</h2>
            </div>
            <div className="pjd-textbox">
              {/* PREP */}
              <p className="pjd-subtitle">プロジェクト準備</p>
              <p className="pjd-struggles-p">
                　APIは
                <a
                  href="https://openlibrary.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Library
                </a>
                と
                <a
                  href="https://developers.google.com/books/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Books APIs
                </a>
                の2つを検討しましたが、前者はやはり日本語書籍がヒットしなかったため後者を選定しました。
              </p>
              <p className="pjd-struggles-p">
                　ツール選定後、Figmaでデザインを作成しました。実際にスマホを持つところをイメージし使いやすいようデザインしたつもりでしたが、実際に操作してみて使用し辛かったりわかりにくい箇所がいくつかあり、開発途中に都度修正を行いました。この想定と実際の操作のギャップを知ることができ良かったです。
              </p>

              <p className="pjd-struggles-notation">当初のFigmaデザイン</p>
              <img src={Design} alt="Figma" className="pjd-struggles-figma" />

              <p className="pjd-struggles-p">
                本プロジェクトは
                <span className="code">npx create-react-app</span>
                から作成しました。最初に
                <span className="code">react-redux</span>,{" "}
                <span className="code">@reduxjs/toolkit</span>,{" "}
                <span className="code">react-router-dom</span>
                と、スタイリングのため<span className="code">
                  node-sass
                </span>, <span className="code">fontawesome</span>,{" "}
                <span className="code">react-responsive</span>
                をnpmでインストールしています。
              </p>

              {/* STRUGGLES */}
              <p className="pjd-subtitle">特に苦労した点</p>

              <ol>
                <li className="pjd-struggles-item">
                  Google Books APIsの使用と、公式ドキュメント
                  <br />
                  本プロジェクトを作成するにあたり、自身で公式ドキュメントを読み込む練習をするため、youtubeなどにあるチュートリアル形式の解説は見ないことを決めました。当初はドキュメントにほとんど慣れていなかったため、わからない内容が盛りだくさんの文書に圧倒されていました。少しづつ調べながら、fetchAPIで検索結果を取得する方法をドキュメントから見つけ、データはmapで表示させています。
                  <br />
                  　記事を投稿する機能を実装するにあたり、このmapで表示させたAPIデータのなかから、クリックした本のid等をどう取得するかが難しかったです。最終的にはmapコードのなかであれば該当の書籍のデータが抽出できると考え、調べたところmap内にhandlerを入れることで解決しました。
                </li>
                <li className="pjd-struggles-item">
                  Router v6.4とReduxの併用
                  <br />
                  　当初はreact-router-dom
                  v5でルーティング設定を行う前提でreduxのreducerを記述していましたが、
                  <a
                    href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    使用していたオンラインコース
                  </a>
                  で新しくRouter
                  v6.4の解説がリリースされたため、こちらも検討に含めることにしました。
                  loaderを使用すれば下記2点のメリットがありそうでしたので、v6.4へ書き換えることにしました。
                  <br />
                  　①ページレンダー時にDBからfetchしたデータをuseEffectで global
                  stateに登録する箇所を1箇所に集約可能 <br />
                  　②そのコードをcomponent外（loader）に記述できるためcomponent内が整理される
                  <br />
                  　作業開始時はstateとloaderの役割が曖昧だったため、ページ内で使う全てのデータをloaderで取得したデータに置き換えてしまい、例えば本棚に書籍を追加した後もcomponentがリレンダーされない問題が発生しました。そのため、fetchはloader内で行い、ユーザーの操作が発生したときは内容をstateに登録することにしましたがこの使い分けに苦労しました。
                  <br />
                  　最終的にはRootLayoutで取得したloaderデータをstateに登録しましたが、loaderでデータ取得時にすでにproperty名等を設定したものをリターンしているため、そのままuseRouteLoaderDataをstateに登録できました。reduxのreducerがシンプルで完結になり、この点からもloaderを採用したメリットがありました。
                </li>
              </ol>

              <p className="pjd-subtitle">今後の課題</p>
              <p className="pjd-struggles-p">
                　認証ページはlocalStorageのtoken有無のみに依存している中途半端な状態のため、実際にauth機能を使って認証する方法を開発中です
              </p>
              <p className="pjd-struggles-p">
                　現在、各書籍のページURLはDynamic Routingを用いてGoogle Books
                APIsのidに設定しており、App.jsで個別にpathを設定しなくてもよいようになっております。しかしこの本のページを直接更新するとエラーが発生してしまい、今後これが改善できるのか含めその方法を模索していきます。
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

export default PJYomuLog;
