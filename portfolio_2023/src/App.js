import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About"; 
//import Portfolio from './components/Portfolio' import Experience from "./components/Experience" import Contact from "./components/Contact"
import SocialLinks from "./components/SocialLinks";
import Experience from "./components/Experience";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <SocialLinks />
      <Experience />
    </div>
  );
}

export default App;
