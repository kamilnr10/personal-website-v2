import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import MainTemplate from "./templates/MainTemplate";
import Hero from "./components/Hero/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";

function App() {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </MainTemplate>
    </BrowserRouter>
  );
}

export default App;
