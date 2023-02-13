import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import MainTemplate from "./templates/MainTemplate";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <MainTemplate>
      <Navigation />
      <Hero />
    </MainTemplate>
  );
}

export default App;
