import axios from "axios";
import { useEffect, useState } from "react";

interface StarWarsAPI {
  people: string;
  planets: string;
  films: string;
  species: string;
  vehicles: string;
  starships: string;
}

const StarWars = () => {
  const [data, setData] = useState<StarWarsAPI | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://swapi.dev/api/");
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>{data && Object.keys(data).map((item) => <h1 key={item}>{item}</h1>)}</>
  );
};

export default StarWars;
