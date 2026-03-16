import { Analytics } from "@vercel/analytics/react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import RickAndMorty from "./Pages/RickAndMorty";
import StarWars from "./Pages/StarWars";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/star-wars" element={<StarWars />} />
        <Route path="/rick-and-morty" element={<RickAndMorty />} />
      </Routes>
      <Analytics />
    </>
  );
}

export default App;
