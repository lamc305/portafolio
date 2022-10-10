import './portadaStyles.css'
import header from '../../assets/header-img.svg'
import { BsLinkedin, BsGithub, BsTelegram } from 'react-icons/bs'
import { useContext } from 'react'
import { IntersectionObserver } from '../../context/IntersectionObserver'
function Portada() {

  const { ref1 } = useContext(IntersectionObserver)

  return (
    <section id='portada' ref={ref1}>
      <div className='portada__container'>
        <div className='portada__text'>
          <p>Hi there</p>
          <h1>I'm <span className='red'>Luis Medina</span></h1>
          <h3>I am a Frontend Developer</h3>
          <div className='portada__buttons'>
            <button>Resume</button>
            <button>Contact me</button>
          </div>
        </div>
        <div>
          <img className='hero' src={header} alt="hero" />
        </div>
      </div>
      <div className='links'>
        <a href="https://www.linkedin.com/in/luis-medina-dev/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/lamc305" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
        <a href="https://telegram.me/lamc1058" target="_blank" rel="noopener noreferrer" ><BsTelegram /></a>
        <div></div>
      </div>
    </section>
  )
}

export default Portada