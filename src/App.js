import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App m-auto flex flex-col items-center h-full w-1/2">
      <h1 className="text-4xl">
        Helloz. We have dogz. Click on them for more info.
      </h1>
      <Outlet />
    </div>
  );
}

export default App;
