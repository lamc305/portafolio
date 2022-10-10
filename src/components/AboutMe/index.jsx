import { useContext } from "react"
import { IntersectionObserver } from "../../context/IntersectionObserver"

function AboutMe() {

  const { ref2 } = useContext(IntersectionObserver)

  return (
    <section id='aboutMe' ref={ref2}></section>
  )
}

export default AboutMe