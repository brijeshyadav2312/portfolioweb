import Navbaar from "./components/Navbaar";
import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Skills from "./components/Skills";
import Background from "./components/Background";

function App() {
  return (
    <div className="App">
      <Navbaar/>
      <Background/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Skills" element={<Skills/>}/>
        <Route path="*" element={<Main/>}/>
      </Routes>
    </div>
  );
}

export default App;
