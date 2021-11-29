import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <main>
        <h2>Wlcome to the homepage</h2>
      </main>
      <nav><Link to="/about">About</Link></nav>
    </div>
  );
}

