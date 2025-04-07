
import { Intro, About, Experience, Projects, Contact } from "./Sections";
import { Navbar } from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ fontFamily: "Montserrat" }}>
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
