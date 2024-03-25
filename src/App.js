import logo from "./logo.svg";
import "./App.css";

const skills = [
  { skill: "React", level: "👶🏿" },
  { skill: "HTML", level: "💪🏿" },
  { skill: "CSS", level: "👍🏿" },
];

function App() {
  return (
    <div className="app">
      <Dp />
      <Text />
    </div>
  );
}

function Dp() {
  return <img src="logo192.png" alt="hello" className="dp" />;
}

function Text() {
  return (
    <div className="textbox">
      <Title />
      <Description />
      <Skills />
    </div>
  );
}

function Title() {
  return <h3>Sodiq Olaniyi</h3>;
}

function Description() {
  return (
    <p>
      Sodiq Olaniy iSodiq Olaniyi Sodiq Olaniyi Sodiq Olaniyi Sodiq Olaniyi
      Sodiq Olaniyi Sodiq Olaniyi Sodiq Olaniyi Sodiq Olaniyi Sodiq Olaniyi
      Sodiq Olaniyi Sodiq Olaniyi Sodiq Olaniyi
    </p>
  );
}

function Skills() {
  return (
    <ul>
      {skills.map((skill) => (
        <li className={skill.level === "👶🏿" && "red"}>{skill.skill}</li>
      ))}
    </ul>
  );
}

export default App;
