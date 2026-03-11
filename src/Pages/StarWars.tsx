import axios from "axios";
import { useEffect, useState } from "react";
import IntroStarWars from "../StarWarsComponents/IntroStarWars";
import NavBarStarWars from "../StarWarsComponents/NavBarStarWars";
import { type StarWarsAPI, type StarWarsItem } from "../types/starwars";

const StarWars = () => {
  const [tabs, setTabs] = useState<StarWarsAPI | null>(null);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [tabData, setTabData] = useState<StarWarsItem[] | null>(null);

  //   Fetches the main Categories of the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://swapi.dev/api/");
        setTabs(response.data);
        console.log("Main data Successfully fetched");
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/${activeTab}`);
        setTabData(response.data.results);
        console.log(`I fetched ${activeTab}:`, response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    if (activeTab) {
      fetchData();
    }
  }, [activeTab]);

  return (
    <>
      <div
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/starWars/bg_space.jpg')" }}
      >
        {tabs && <NavBarStarWars tabs={tabs} setActiveTab={setActiveTab} />}
        {!activeTab && <IntroStarWars />}
        {activeTab &&
          tabData?.map((item) => <h1 key={item.name}>{item.name}</h1>)}
      </div>
    </>
  );
};

export default StarWars;
