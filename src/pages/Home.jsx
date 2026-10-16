import { Link } from "react-router-dom";
import Typing from "../components/Typing.jsx";
import PhotoFrame from "../components/PhotoFrame.jsx";
import BracketName from "../components/BracketName.jsx";
import { profile } from "../data.js";

export default function Home() {
  return (
    <section className="page home">
      <div className="home-text">
        <h1 className="hello">
          Hello, my name is <BracketName name={profile.name} className="script" />
        </h1>
        <h2 className="role">
          I'm a <Typing words={profile.roles} />
        </h2>
        <p className="lead">{profile.intro}</p>
        <Link to="/about" className="btn">
          More About Me
        </Link>
      </div>
      <PhotoFrame />
    </section>
  );
}
