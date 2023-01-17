import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [windowScreen, setWindowScreen] = useState(window.innerWidth);
  const handleWidth = () => {
    setWindowScreen(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleWidth);
  }, [windowScreen]);

  return (
    <div className="App">
      <p>{windowScreen}</p>
    </div>
  );
}

export default App;
