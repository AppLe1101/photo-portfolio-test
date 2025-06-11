import logo from "./logo.svg";
import "./App.css";
import MainSection from "./components/MainSection";
import Gallery from "./components/Gallary";
import AboutBlock from "./components/AboutBlock";

function App() {
  return (
    <div className="App">
      <div className="blocks-container-main">
        <MainSection />
        <Gallery />
        <AboutBlock />
      </div>
      <footer className="footer">
        <p>footer here|contact info</p>
        <a href="https://t.me/">Телеграмм</a>
      </footer>
    </div>
  );
}

export default App;
