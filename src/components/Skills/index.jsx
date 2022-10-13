import html from '../../assets/html.svg'
import css from '../../assets/css.svg'
import javascript from '../../assets/javascript.svg'
import react from '../../assets/react.svg'
import git from '../../assets/git.svg'
import github from '../../assets/github.svg'
import './skillsStyles.css'
function Skills() {
  return (
    <>
      <figure>
        <img src={html} alt='HTML' className='icon' />
        <figcaption>
          HTML
        </figcaption>
      </figure>
      <figure>
        <img src={css} alt='CSS' className='icon' />
        <figcaption>
          CSS
        </figcaption>
      </figure>
      <figure>
        <img src={javascript} alt='JavaScript' className='icon' />
        <figcaption>
          JavaScript
        </figcaption>
      </figure>
      <figure>
        <img src={react} alt='React' className='icon' />
        <figcaption>
          React
        </figcaption>
      </figure>
      <figure>
        <img src={git} alt='Git' className='icon' />
        <figcaption>
          Git
        </figcaption>
      </figure>
      <figure>
        <img src={github} alt='Github' className='icon' />
        <figcaption>
          Github
        </figcaption>
      </figure>
    </>
  )
}

export default Skills