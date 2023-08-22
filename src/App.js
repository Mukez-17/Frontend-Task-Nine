import Home from "./pages/Home";
import Navigation from "./pages/Navigation";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import About from "./pages/About";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Career />
      <Contact />
      <About />
    </div>
  );
}

export default App;
