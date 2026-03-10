import axios from "axios";
import { useEffect, useState } from "react";
import IntroStarWars from "../StarWarsComponents/IntroStarWars";
import NavBarStarWars from "../StarWarsComponents/NavBarStarWars";

interface StarWarsAPI {
  people: string;
  planets: string;
  films: string;
  species: string;
  vehicles: string;
  starships: string;

  [key: string]: string;
}

const StarWars = () => {
  const [tabs, setTabs] = useState<StarWarsAPI | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://swapi.dev/api/");
        setTabs(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg_space.jpg')" }}
      >
        {tabs && <NavBarStarWars tabs={tabs} />}
        <IntroStarWars />
      </div>
    </>
  );
};

export default StarWars;
