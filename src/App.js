import logo from "./logo.svg";
import  Home  from "./components/Home.js"
import  About  from "./components/About.js"
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
    console.log(Home)
  return (
    <div className="App">
      <h1>Welcome to React Router</h1>
      <Routes>
          <Route path="/" element={ <Home /> }></Route>
          <Route path="/about" element={ <About /> }></Route>
          <Route path="*" element={ <Home /> }></Route>
      </Routes>

      {/* <Link to="about">About</Link> */}
      {/* <Link to="contact">Contact</Link> */}
    </div>
  );
}

export default App;
