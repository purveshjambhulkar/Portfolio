import "./App.css";
import "./mediaqueries.css";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Profile></Profile>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
