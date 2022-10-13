import { useContext } from "react"
import { IntersectionObserver } from "../../context/IntersectionObserver"
import logo from '../../assets/why-me2.jpg'
import './aboutMeStyles.css'

import Skills from "../Skills"
function AboutMe() {

  const { ref2, inView2 } = useContext(IntersectionObserver)


  return (
    <section id='aboutMe' ref={ref2}>
      <h2 className={`${inView2 ? 'animate__textAbout' : ' '}`} >About Me</h2>
      <div className={`${inView2 ? 'aboutMe__container animate__textAbout ' : 'aboutMe__container'}`}>
        <div >
          <img className='aboutMe__img' src={logo} alt="why me?" />
        </div>
        <div className='aboutMe__text'
        >
          <p>I'm a <span className='red'>frontend developer with ReactJS</span>, able to carry out the designs that are presented to me and solving the problems that arise as the design is transferred to code </p>
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