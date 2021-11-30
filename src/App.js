import { Outlet, Link } from "react-router-dom";
import "./App.css";
import hazel from './images/hazel.jpg'


function App() {
  return (
      <div className="App m-auto flex flex-col items-center h-full w-1/2">
        <h1 className="text-4xl">Helloz. We have dogz. Click on them for more info.</h1>
        <div className="flex justify-between w-full pt-3 pb-3">
          <div className="flex flex-col">
              <img className="rounded-full border-8 mb-3 w-72" src={hazel} alt="" />
              <Link to="vocals">hazel</Link>
          </div>
          <div className="flex flex-col">
              <img className="rounded-full border-8 mb-3 w-72" src={hazel} alt="" />
              <Link to="vocals">Vocals</Link>
          </div>
          <div className="flex flex-col">
              <img className="rounded-full border-8 mb-3 w-72" src={hazel} alt="" />
              <Link to="vocals">Vocals</Link>
          </div>
      </div>

    </div>
  );
}

export default App;
