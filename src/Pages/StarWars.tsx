import axios from "axios";
import { useEffect, useState } from "react";
import CardContainer from "../StarWarsComponents/CardContainer";
import IntroStarWars from "../StarWarsComponents/IntroStarWars";
import LoadingStarWars from "../StarWarsComponents/LoadingStarWars";
import NavBarStarWars from "../StarWarsComponents/NavBarStarWars";
import { type StarWarsAPI, type StarWarsItem } from "../types/starwars";

const StarWars = () => {
  const [tabs, setTabs] = useState<StarWarsAPI | null>(null);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [tabData, setTabData] = useState<StarWarsItem[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

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

  // Fetches Tab Content on Tab-change
  useEffect(() => {
    if (!activeTab) return;
    const fetchTabData = async () => {
      setTabData(null);
      setLoading(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      try {
        const response = await axios.get(`https://swapi.dev/api/${activeTab}`);
        setTabData(response.data.results);
        console.log(`I fetched ${activeTab}:`, response.data.results);
        setLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    if (activeTab) {
      fetchTabData();
      console.log(`Active tab: ${activeTab}`);
    }
  }, [activeTab]);

  return (
    <>
      <div
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/starWars/bg_space.jpg')" }}
      >
        {tabs && <NavBarStarWars tabs={tabs} setActiveTab={setActiveTab} />}
        <main className="flex-grow container mx-auto px-6 py-12">
          {!activeTab && <IntroStarWars />}

          {loading ? (
            <LoadingStarWars />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
              {tabData?.map((item) => (
                <CardContainer
                  key={item.url}
                  item={item}
                  activeTab={activeTab}
                />
              ))}
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default StarWars;
