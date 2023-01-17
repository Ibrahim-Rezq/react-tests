import { useState } from "react";
import "./App.css";
import Count from "./Count";

function App() {
  const [count, setCount] = useState(0);
  const handIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <Count count={count} handIncrement={handIncrement} />
    </div>
  );
}

export default App;
