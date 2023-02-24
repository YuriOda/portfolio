import { Link, useNavigate } from "react-router-dom";
import YomulogImg from "../assets/yomu-log.png";
import TodoLight from "../assets/todo-light.png";

const Project = () => {
  const navigate = useNavigate();
  const navigateToYomuLog = () => {
    navigate("/project/yomu-log");
  };
  const navigateTodoHandler = () => {
    navigate("/project/todo");
  };

  return (
    <section id="project">
      <h3 className="section-title">Project</h3>

      {/* YOMU LOG */}
      <div className="yomulog-container">
        <Link to="/project/yomu-log" className="view-detail">
          <img src={YomulogImg} alt="Yomu Log Screenshot" className="pj-img" />
        </Link>
        <div className="pj-text">
          <span className="pj-subtitle">Make your bookshelf digital</span>
          <p className="pj-title">Yomu Log</p>
          <p className="pj-explain">
            <span>本棚をデジタル化</span>
            <span>読書の途中にポストする感想文</span>
          </p>
          <p>
            React, Router, Google Books API, Firebase (RealtimeDB, Auth), Sass
          </p>

          <button className="pj-button" onClick={navigateToYomuLog}>
            View Detail
          </button>
        </div>
      </div>

      {/* TODO */}
      <div className="todo-container">
        <div className="pj-text todo-text">
          <span className="pj-subtitle">Simple & Easy to Use</span>
          <p className="pj-title">To Do App</p>
          <p className="pj-explain">
            <span>ドラッグで順番変更可能なToDoList</span>
            <span>ダークモード・モバイル対応</span>
          </p>
          <p>React, Context, Firebase (RealtimeDB)</p>

          <button
            className="pj-button pj-button-todo"
            onClick={navigateTodoHandler}
          >
            View Detail
          </button>
        </div>
        <Link to="/project/todo" className="view-detail">
          <img src={TodoLight} alt="To Do App Screenshot" className="pj-img" />
        </Link>
      </div>

      {/* COMING SOON */}
      <div className="comingsoon-container">
        <div className="comingsoon-img"></div>
        <div className="pj-text comingsoon-text">
          <p className="pj-title">Working on ...</p>
          <p>
            Team Project from{" "}
            <a
              href="https://www.chingu.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chingu
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Project;
