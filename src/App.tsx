import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import StarWars from "./Pages/StarWars";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/star-wars" element={<StarWars />} />
      </Routes>
      <Analytics />
    </>
  );
}

export default App;
