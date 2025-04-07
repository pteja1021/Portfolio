import { Intro, About, Experience, Projects, Contact, Footer } from "./Sections";
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{ fontFamily: "Montserrat" }}>
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
