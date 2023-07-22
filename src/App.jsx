import "./App.css";
import AboutMe from "./modules/about-me";
import Nav from "./modules/nav";
import Portada from "./modules/portada";
import Projects from "./modules/projects";
import { IntersectionObserverProvider } from "./context/IntersectionObserver";
import { LangContextProvider } from "./context/langContext";

function App() {
  return (
    <LangContextProvider>
      <div className="App">
        <IntersectionObserverProvider>
          <Nav />
          <Portada />
          <AboutMe />
          <Projects />
        </IntersectionObserverProvider>
      </div>
    </LangContextProvider>
  );
}

export default App;
