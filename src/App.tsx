import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Map from "./components/maps/Map";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
