import { createContext, useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

export const IntersectionObserver = createContext()



export function IntersectionObserverProvider({ children }) {

  const [toggleActive, setToggleActive] = useState('portada')
  const [ref1, inView1] = useInView({
    "rootMargin": "-250px"
  })
  const [ref2, inView2] = useInView({
    "rootMargin": "-250px"
  })
  const [ref3, inView3] = useInView({
    "rootMargin": "-250px"
  })
  const [ref4, inView4] = useInView({
    "rootMargin": "-250px"
  })

  useEffect(() => {
    if (inView1) setToggleActive('portada')
    if (inView2) setToggleActive('aboutMe')
    if (inView3) setToggleActive('experience')
    if (inView4) setToggleActive('projects')
  }, [inView1, inView2, inView3, inView4, setToggleActive])

  const data = { toggleActive, setToggleActive, ref1, ref2, ref3, ref4, inView1, inView2, inView3, inView4 }

  return (
    <IntersectionObserver.Provider value={data}>
      {children}
    </IntersectionObserver.Provider>
  )
}