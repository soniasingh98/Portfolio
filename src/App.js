import "./App.css";
import { Navi } from "./components/Navi";
import Banner from "./components/Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./components/Skills";
import { Projects } from "./components/Projects";
function App() {
  return (
    <div className="App">
      <Navi />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
