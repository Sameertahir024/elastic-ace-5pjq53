import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div style={{ display: "flex" }}>
      <h1>sameer</h1>
      <button
        onClick={() => setCounter(counter + 1)}
        style={{ color: "red", backgroundColor: "black" }}
      >
        increment
      </button>
      <button
        onClick={() => setCounter(counter - 1)}
        style={{ color: "red", backgroundColor: "black" }}
      >
        decrement
      </button>
      {counter}
    </div>
  );
};
export default App;
