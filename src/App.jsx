import './App.css'
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'
import Experience from './components/Experience'
import Nav from './components/Nav'
import Portada from './components/Portada'
import Projects from './components/Projects'

function App() {


  return (
    <div className="App">
      <Nav />
      <Portada />
      <AboutMe />
      <Experience />
      <Projects />
      <ContactMe />
    </div>
  )
}

export default App
