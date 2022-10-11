import { useContext } from "react"
import { IntersectionObserver } from "../../context/IntersectionObserver"
import logo from '../../assets/why-me2.jpg'
import './aboutMeStyles.css'

function AboutMe() {

  const { ref2, inView2 } = useContext(IntersectionObserver)

  return (
    <section id='aboutMe' ref={ref2}>
      <h2 className={`${inView2 ? 'animate__textAbout' : ' '}`} >About Me</h2>
      <div className='aboutMe__container'>
        <div>
          <img className={`${inView2 ? 'aboutMe__img animated__img ' : 'aboutMe__img'}`} src={logo} alt="" />
        </div>
        <div className={`${inView2 ? 'animate__textAbout aboutMe__text' : 'aboutMe__text '}`}
        >
          <p>I'm a <span className='red'>frontend developer with ReactJS</span>, able to carry out the designs that are presented to me and solving the problems that arise as the design is transferred to code </p>
          <h4>My Skills are</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>Git</li>
            <li>Github</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AboutMe