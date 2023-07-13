import "./App.css";
import AboutMe from "./components/AboutMe";
import Nav from "./components/Nav";
import Portada from "./components/Portada";
import Projects from "./components/Projects";
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
