import './navStyles.css'
import { FaHome } from 'react-icons/fa'
import { SiAboutdotme } from 'react-icons/si'
import { RiComputerFill } from 'react-icons/ri'
import { useContext } from 'react'
import { IntersectionObserver } from '../../context/IntersectionObserver'
function Nav() {

  const { toggleActive } = useContext(IntersectionObserver)

  return (
    <div className='navigation'>

      <nav>

        <a className={`${toggleActive === 'portada' ? 'active' : ''}`} href='#portada'><FaHome /></a>
        <a className={`${toggleActive === 'aboutMe' ? 'active' : ''}`} href='#aboutMe'><SiAboutdotme /></a>
        <a className={`${toggleActive === 'projects' ? 'active' : ''}`} href='#projects'
          aria-label='Projects'
        ><RiComputerFill /></a>

      </nav>

      <div className='title-navigation'>
        <p>Portada</p>
        <p>About me</p>
        <p>Projects</p>
      </div>

    </div>
  )
}

export default Nav