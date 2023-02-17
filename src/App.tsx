import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Map from "./components/maps/Map";
import Loading from "./components/UI/Loading";
import "./App.css";
import { RootState } from "./store";
import { useSelector } from "react-redux";

function App() {
  const mapLoading = useSelector(
    (state: RootState) => state.sliceState.loading
  );
  return (
    <div className="App">
      <Header />
      {mapLoading && <Loading />}
      <Map />
      <Footer />
    </div>
  );
}

export default App;
