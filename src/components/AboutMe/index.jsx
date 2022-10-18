import { useContext } from "react"
import { IntersectionObserver } from "../../context/IntersectionObserver"
import logo from '../../assets/why-me2.webp'
import './aboutMeStyles.css'

import Skills from "../Skills"
function AboutMe() {

  const { ref2 } = useContext(IntersectionObserver)

  return (
    <section id='aboutMe' ref={ref2}>
      <h2>About Me</h2>
      <div className='aboutMe__container'>
        <div >
          <img className='aboutMe__img' src={logo} alt="why me?" />
        </div>
        <div className='aboutMe__text'
        >
          <p>I'm a <span className='blue'>frontend developer with ReactJS</span>, able to carry out the designs that are presented to me and solving the problems that arise as the design is transferred to code </p>
          <p>My Skills are</p>
          <div className='skills__container'>
            <Skills />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe