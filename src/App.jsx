import { useState } from "react";
import Counter from "./Components/Counter";

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [name, setName] = useState("tara");

  const handleClick = () => {
    console.log("tess");
  };

  return (
    <>
      <h1 onClick={() => setName("kharisma")}>{name}</h1>

      <h1 onClick={handleClick}>clic me </h1>
      <Counter />
    </>
  );
}

export default App;
