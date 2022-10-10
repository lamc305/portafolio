import { useContext } from "react"
import { IntersectionObserver } from "../../context/IntersectionObserver"

function Experience() {

  const { ref3 } = useContext(IntersectionObserver)

  return (
    <section id='experience' ref={ref3}>

    </section>
  )
}

export default Experience