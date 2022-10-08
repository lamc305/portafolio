import './portadaStyles.css'
import header from '../../assets/header-img.svg'

function Portada() {


  return (
      <section id='portada'>
        <div className='portada__container'>
          <div className='portada__text'>
            <p>Hello I'm</p>
            <h1>Luis Medina</h1>
            <p>Frontend Developer</p>
          </div>
          <div>
            <img className='hero' src={header} alt="hero" />
          </div>
        </div>
      </section>
  )
}

export default Portada