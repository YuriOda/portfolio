import { Link } from "react-router-dom";
import YomulogImg from "../assets/yomu-log.png";
import TodoLight from "../assets/todo-light.png";

const Project = () => {
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

          <button className="pj-button">
            <Link to="/project/yomu-log" className="view-detail">
              View Detail
            </Link>
          </button>
        </div>
      </div>

      {/* TODO */}
      <div className="todo-container">
        <div className="pj-text todo-text">
          <span className="pj-subtitle">Simple & Easy to Use</span>
          <p className="pj-title">To Do App</p>
          <p className="pj-explain">
            <span>本棚をデジタル化</span>
            <span>読書の途中にポストする感想文</span>
          </p>
          <p>React, Context, Firebase (RealtimeDB)</p>
          <button className="pj-button todo-button">
            <Link to="/project/todo" className="view-detail">
              View Detail
            </Link>
          </button>
        </div>
        <Link to="/project/todo" className="view-detail">
          <img src={TodoLight} alt="To Do App Screenshot" className="pj-img" />
        </Link>
      </div>
    </section>
  );
};

export default Project;
