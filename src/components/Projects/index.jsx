import './projectsStyles.css'
import apps from '../../apps.json'
import { useContext } from 'react'
import { IntersectionObserver } from '../../context/IntersectionObserver'
function Projects() {

  const { ref4 } = useContext(IntersectionObserver)

  return (
    <section id='projects' ref={ref4}>
      <h2>Projects</h2>
      <div className='container__projects'>
        {apps.map(({ name, img, id, tecnologies }) => (
          <div className="container" key={id}>
            <img src={img} alt="Avatar" loading='lazy' className="image" />
            <div className="overlay">
              <div className="text">
                <p>{name}</p>
                <p>{tecnologies}</p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects