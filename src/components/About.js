import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <main>
        <h2>About me</h2>
        <p>Nothing much</p>
      </main>
      <nav><Link to="/">Home</Link></nav>
    </div>
  );
}
