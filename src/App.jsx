import './App.css'
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'
import Experience from './components/Experience'
import Nav from './components/Nav'
import Portada from './components/Portada'
import Projects from './components/Projects'
import { IntersectionObserverProvider } from './context/IntersectionObserver'

function App() {


  return (
    <div className="App">
      <IntersectionObserverProvider>
        <Nav />
        <Portada />
        <AboutMe />
        <Experience />
        <Projects />
        <ContactMe />
      </IntersectionObserverProvider>
    </div>
  )
}

export default App
