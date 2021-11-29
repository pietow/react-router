import { useState } from "react";
import "./App.css";

function Counter(props) {
  return (
    <div className="border-2">
      <h2>{props.count}</h2>
      <p>Child1</p>
    </div>
  );
}

function InputField({count, setCount}) {
  const [input, setInput] = useState(""); //my state of my child; my parent does not need to know about it; therefore I don't need to lift it up.

  return (
    <div className="border-2">
      <input
        className="border-2 mr-2"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
          <button className="border-2 rounded p-2" onClick={() => setCount(parseInt(input) + count)}>+</button>
      <p>Child2</p>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(1);
  return (
    <div>
      <h2>Parent Component</h2>
      <Counter count={count}></Counter>
      <InputField count={count} setCount={setCount}></InputField>
    </div>
  );
}

export default App;
