import Footer from "./components/structure/Footer";
import Header from "./components/structure/Header";
import Main from "./components/structure/Main";
import "./style.scss";

function App() {
  return <div id="pico-root">
    <Header name="Name of Site" />
    <Main></Main>
    <Footer />
  </div>;
}

export default App;
