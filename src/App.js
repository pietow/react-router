import logo from "./logo.svg";
import  Home  from "./components/Home.js"
import  Vocals  from "./components/Vocals.js"
import  Guitar  from "./components/Guitar.js"
import  Bass  from "./components/Bass.js"
import  Drums  from "./components/Drums.js"
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App flex flex-col items-center bg-gray-900 text-white h-full">
      <h1><img className="filter invert" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffamfonts.com%2Fwp-content%2Fuploads%2Fblack-sabbath-wide.png&f=1&nofb=1" alt="" /></h1>
      <div className="flex justify-between w-2/12 pt-3 pb-3">
          <Link to="vocals">Vocals</Link>
          <Link to="guitar">Guitar</Link>
          <Link to="bass">Bass</Link>
          <Link to="drums">Drums</Link>
      </div>
      <Routes>
          <Route path="/" element={ <Home /> }></Route>
          <Route path="/vocals" element={ <Vocals /> }></Route>
          <Route path="/guitar" element={ <Guitar /> }></Route>
          <Route path="/bass" element={ <Bass /> }></Route>
          <Route path="/drums" element={ <Drums /> }></Route>
          <Route path="*" element={ <Home /> }></Route>
      </Routes>

    </div>
  );
}

export default App;
