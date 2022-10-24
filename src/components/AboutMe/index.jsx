import { useContext } from "react"
import { IntersectionObserver } from "../../context/IntersectionObserver"
import logo from '../../assets/why-me2.webp'
import './aboutMeStyles.css'

import Skills from "../Skills"
import { FormattedMessage } from "react-intl"
function AboutMe() {

  const { ref2 } = useContext(IntersectionObserver)

  return (
    <section id='aboutMe' ref={ref2}>
      <h2>
        <FormattedMessage
          id='about.title'
          defaultMessage='About Me'
        />
      </h2>
      <div className='aboutMe__container'>
        <div >
          <img className='aboutMe__img' src={logo} alt="why me?" />
        </div>
        <div className='aboutMe__text'
        >
          <p>
            <FormattedMessage
              id='about.Im'
              defaultMessage="I'm a "
            />

            <span className='blue'>
              <FormattedMessage
                id='about.position'
                defaultMessage='frontend developer with ReactJS'
              />

            </span>
            <FormattedMessage
              id='about.restAboutme'
              defaultMessage=', able to carry out the designs that are presented to me and solving the problems that arise as the design is transferred to code'
            />

          </p>
          <p>
            <FormattedMessage
              id='about.skills'
              defaultMessage='My skills are'
            />
          </p>
          <div className='skills__container'>
            <Skills />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe