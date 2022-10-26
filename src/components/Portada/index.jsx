import './portadaStyles.css'
import header2 from '../../assets/4900_7_04.webp'
import { BsLinkedin, BsGithub, BsTelegram } from 'react-icons/bs'
import { AiOutlineMail, AiOutlineDownload } from 'react-icons/ai'
import { useContext } from 'react'
import { IntersectionObserver } from '../../context/IntersectionObserver'
import { FormattedMessage } from 'react-intl'
import { LangContext } from '../../context/langContext'
function Portada() {

  const { ref1 } = useContext(IntersectionObserver)
  const { locale } = useContext(LangContext)
  const sendMessage = () => {
    window.location.href = 'mailto:lamc3005@gmail.com'
  }

  return (
    <section id='portada' ref={ref1}>
      <div className='portada__container'>
        <div className='portada__text'>
          <p>
            <FormattedMessage
              id='app.hi'
              defaultMessage='Hi there'
            />
          </p>
          <h1>
            <FormattedMessage
              id='app.name'
              defaultMessage="I'm Luis Medina"
              values={{
                name: <span className="blue">Luis Medina,</span>
              }}
            />
          </h1>
          <h2>
            <FormattedMessage
              id='app.job'
              defaultMessage='I am a Frontend Developer'
            />
          </h2>
          <div className='portada__buttons' >
            <a
              href={locale === 'en-US' ? '../../assets/CVLuisMedina-English.pdf' : '../../assets/CVLuisMedina-Spanish.pdf'}
              download
              className='btn'
            >
              <p>
                <FormattedMessage
                  id='portada.cv'
                  defaultMessage='Resume'
                />
              </p> <AiOutlineDownload />
            </a>
            <button onClick={sendMessage} className='btn'>
              <p>
                <FormattedMessage
                  id='portada.contact'
                  defaultMessage='Contact me'
                />
              </p> <AiOutlineMail /></button>
          </div>
        </div>
        <div className='hero__container'>
          <img loading='lazy' className='hero' src={header2} alt="hero" />
        </div>
      </div>
      <div className='links'>
        <a aria-label="Read more about me in my profile on LinkedIn" href="https://www.linkedin.com/in/luis-medina-dev/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
        <a aria-label="See more projects in my profile on Github" href="https://github.com/lamc305" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
        <a aria-label="You can contact to me on Telegram" href="https://telegram.me/lamc1058" target="_blank" rel="noopener noreferrer" ><BsTelegram /></a>
        <div></div>
      </div>
    </section>
  )
}

export default Portada