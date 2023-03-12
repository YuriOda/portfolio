import { useState } from "react";
import { Link } from "react-router-dom";
import YomulogImg from "../assets/yomu-log.png";
import TodoLight from "../assets/todo-light.png";
import TodoDark from "../assets/todo-dark.png";
import Chingu from "../assets/chingu.png";

//icon
import { FaGlobe, FaGithub } from "react-icons/fa";

const Projectv2 = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleToDoImg = () => {
    setIsDark((prev) => !prev);
  };
  const ToDoImg = isDark ? TodoDark : TodoLight;

  return (
    <>
      <section id="project">
        <div className="project">
          <Link to="/project/yomu-log">
            <img
              src={YomulogImg}
              alt="Yomu Log Screenshot"
              className="project__img"
            />
          </Link>

          <h5 className="project__title">
            <Link to="/project/yomu-log" className="project__link">
              Yomu Log
            </Link>
          </h5>

          <p className="project__detail">
            Google Books APIとfirebaseを用いた読書記録アプリ
          </p>
          <p className="project__detail--tool">
            SPA, React Router, API, DataBase, Auth, Sass
          </p>

          <a
            href="https://yomu-log.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobe className="project__icon" />
          </a>
          <a
            href="https://github.com/YuriOda/yomu-log"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="project__icon" />
          </a>
        </div>

        <div className="project">
          <Link to="/project/todo">
            <img
              src={ToDoImg}
              alt="To Do App Screenshot"
              className="project__img"
              onMouseEnter={toggleToDoImg}
              onMouseLeave={toggleToDoImg}
            />
          </Link>

          <h5 className="project__title">
            <Link to="/project/todo" className="project__link">
              To Do App
            </Link>
          </h5>

          <p className="project__detail">Drag&Drop/ダークモード/レスポンシブ</p>
          <p className="project__detail--tool">
            React Context, DataBase(firebase)
          </p>

          <a
            href="https://todo-app-one-dusky.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobe className="project__icon" />
          </a>
          <a
            href="https://github.com/YuriOda/to-do-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="project__icon" />
          </a>
        </div>

        <div className="project">
          <a
            href="https://www.chingu.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Chingu}
              alt="Chingu Screenshot"
              className="project__img blur"
            />
          </a>

          <p className="project__link project__title">開発中 ...</p>

          <p className="project__detail">
            Github / アジャイル開発 / 多国籍チーム(使用言語：英語)
          </p>
          <p className="project__detail--tool">React, DataBase, API</p>
        </div>
      </section>
    </>
  );
};

export default Projectv2;
