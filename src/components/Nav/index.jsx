import './navStyles.css'
import { FaHome } from 'react-icons/fa'
import { SiAboutdotme } from 'react-icons/si'
import { MdOutlineWork } from 'react-icons/md'
import { TbMessage2 } from 'react-icons/tb'
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
        <a className={`${toggleActive === 'experience' ? 'active' : ''}`} href='#experience'><MdOutlineWork /></a>
        <a className={`${toggleActive === 'projects' ? 'active' : ''}`} href='#projects'><RiComputerFill /></a>
        <a className={`${toggleActive === 'contactMe' ? 'active' : ''}`} href='#contactMe'><TbMessage2 /></a>
      </nav>

      <div className='title-navigation'>
        <p>Portada</p>
        <p>About me</p>
        <p>Experience</p>
        <p>Projects</p>
        <p>Contact Me</p>
      </div>

    </div>
  )
}

export default Nav