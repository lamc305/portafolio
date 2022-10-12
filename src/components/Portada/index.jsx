import './portadaStyles.css'
import header from '../../assets/header-img.svg'
import { BsLinkedin, BsGithub, BsTelegram } from 'react-icons/bs'
import { useContext } from 'react'
import { IntersectionObserver } from '../../context/IntersectionObserver'
function Portada() {

  const { ref1, inView1 } = useContext(IntersectionObserver)

  return (
    <section id='portada' ref={ref1}>
      <div className='portada__container'>
        <div className='portada__text'>
          <p className={`${inView1 ? 'animated__entryText' : ' '}`}>Hi there</p>
          <h1 className={`${inView1 ? 'animated__entryText' : ' '}`}>I'm <span className='red'>Luis Medina</span></h1>
          <h3 className={`${inView1 ? 'animated__entryText' : ' '}`}>I am a Frontend Developer</h3>
          <div className={`${inView1 ? 'animated__entryText portada__buttons' : 'portada__buttons '}`} >
            <button>Resume</button>
            <button>Contact me</button>
          </div>
        </div>
        <div>
          <img loading='lazy' className='hero' src={header} alt="hero" />
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