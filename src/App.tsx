import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import StarWars from "./Pages/StarWars";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/star-wars" element={<StarWars />} />
      </Routes>
    </>
  );
}

export default App;
