import './navStyles.css'
import { FaHome } from 'react-icons/fa'
import { SiAboutdotme } from 'react-icons/si'
import { MdOutlineWork } from 'react-icons/md'
import { TbMessage2 } from 'react-icons/tb'
import { RiComputerFill } from 'react-icons/ri'
import { useState } from 'react'
function Nav() {

  const [isActive, setIsActive] = useState('')

  return (
    <div className='navigation'>

      <nav>
        <a href='#portada'><FaHome /></a>
        <a href='#aboutMe'><SiAboutdotme /></a>
        <a href='#experience'><MdOutlineWork /></a>
        <a href='#projects'><RiComputerFill /></a>
        <a href='#contactMe'><TbMessage2 /></a>
      </nav>

      <div>
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