import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Map from "./components/maps/Map";
import Loading from "./components/UI/Loading";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Loading />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
