import './navStyles.css'
import { FaHome } from 'react-icons/fa'
import { SiAboutdotme } from 'react-icons/si'
import { RiComputerFill } from 'react-icons/ri'
import { useContext } from 'react'
import { IntersectionObserver } from '../../context/IntersectionObserver'
function Nav() {

  const { toggleActive } = useContext(IntersectionObserver)

  return (
    <nav>
      <a aria-label="Go to the section home" className={`${toggleActive === 'portada' ? 'active' : ''} tooltip`} href='#portada'><FaHome /> <span className='tooltiptext' >Home</span> </a>
      <a aria-label="Go to the section about me" className={`${toggleActive === 'aboutMe' ? 'active' : ''} tooltip`} href='#aboutMe'><SiAboutdotme /> <span className='tooltiptext' >About Me</span></a>
      <a aria-label="Go to the section projects" className={`${toggleActive === 'projects' ? 'active' : ''} tooltip`} href='#projects'
      ><RiComputerFill /> <span className='tooltiptext' >Projects</span></a>
    </nav>
  )
}

export default Nav