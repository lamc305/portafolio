import next from "../../assets/next-js.svg";
import typescript from "../../assets/typescript.svg";
import tailwind from "../../assets/tailwind-css.svg";
import react from "../../assets/react.svg";
import git from "../../assets/git.svg";
import github from "../../assets/github.svg";
import "./skillsStyles.css";
function Skills() {
  return (
    <>
      <figure>
        <img src={next} alt="HTML" className="icon" />
        <figcaption className="hover:cursor-default">Next.JS</figcaption>
      </figure>
      <figure>
        <img src={typescript} alt="CSS" className="icon" />
        <figcaption className="hover:cursor-default">TypeScript</figcaption>
      </figure>
      <figure>
        <img src={tailwind} alt="JavaScript" className="icon text-slate-900" />
        <figcaption className="hover:cursor-default">TailwindCSS</figcaption>
      </figure>
      <figure>
        <img src={react} alt="React" className="icon" />
        <figcaption className="hover:cursor-default">React</figcaption>
      </figure>
      <figure>
        <img src={git} alt="Git" className="icon" />
        <figcaption className="hover:cursor-default">Git</figcaption>
      </figure>
      <figure>
        <img src={github} alt="Github" className="icon" />
        <figcaption className="hover:cursor-default">Github</figcaption>
      </figure>
    </>
  );
}

export default Skills;
