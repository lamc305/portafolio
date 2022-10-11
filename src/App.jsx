import './App.css'
import AboutMe from './components/AboutMe'
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
        <Projects />
      </IntersectionObserverProvider>
    </div>
  )
}

export default App
