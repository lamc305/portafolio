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
      <a className={`${toggleActive === 'portada' ? 'active' : ''}`} href='#portada'><FaHome /></a>
      <a className={`${toggleActive === 'aboutMe' ? 'active' : ''}`} href='#aboutMe'><SiAboutdotme /></a>
      <a className={`${toggleActive === 'projects' ? 'active' : ''}`} href='#projects'
      ><RiComputerFill /></a>
    </nav>
  )
}

export default Nav