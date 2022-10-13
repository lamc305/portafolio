import './projectsStyles.css'
import apps from '../../apps.json'
import { useContext } from 'react'
import { IntersectionObserver } from '../../context/IntersectionObserver'
import { BsGithub } from 'react-icons/bs'
import { TbWorld } from 'react-icons/tb'

function Projects() {

  const { ref3, inView3 } = useContext(IntersectionObserver)

  return (
    <section id='projects' ref={ref3}>
      <h2 className={`${inView3 ? 'animate__projects' : ' '}`} >Projects</h2>
      <div
        className={`${inView3 ? 'animate__projects container__projects' : ' container__projects'}`}
      >
        {apps.map(({ name, img, id, tecnologies, repositorio, live }) => (
          <div className="container" key={id}>
            <img src={img} alt={name} loading='lazy' className="image" />
            <div className="overlay">
              <div className="text">
                <p>{name}</p>
                <p>{tecnologies}</p>
              </div>
              <div className='links__projects'>
                <a href={repositorio} target="_blank" rel="noopener noreferrer"><BsGithub /></a>
                <a href={live} target="_blank" rel="noopener noreferrer"><TbWorld /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects