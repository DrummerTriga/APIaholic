import axios from "axios";
import { useEffect, useState } from "react";
import IntroRickAndMorty from "../RickAndMortyComponents/IntroRickAndMorty";
import LoadingRickAndMorty from "../RickAndMortyComponents/LoadingRickAndMorty";
import CardContainer from "../StarWarsComponents/CardContainer";
import { type StarWarsAPI, type StarWarsItem } from "../types/starwars";

const RickAndMorty = () => {
  const [tabs, setTabs] = useState<StarWarsAPI | null>(null);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [tabData, setTabData] = useState<StarWarsItem[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [enterToggle, setEnterToggle] = useState<boolean>(false);

  //   Fetches the main Categories of the API
  useEffect(() => {
    if (!enterToggle) return;

    const fetchData = async () => {
      try {
        const response = await axios.get("https://rickandmortyapi.com/api/");
        setTabs(response.data);
        console.log("Main data Successfully fetched");
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [enterToggle]);

  // Fetches Tab Content on Tab-change
  // useEffect(() => {
  //   if (!activeTab) return;
  //   const fetchTabData = async () => {
  //     setTabData(null);
  //     setLoading(true);
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //     try {
  //       const response = await axios.get(`https://swapi.dev/api/${activeTab}`); // outdated
  //       setTabData(response.data.results);
  //       console.log(`I fetched ${activeTab}:`, response.data.results);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   if (activeTab) {
  //     fetchTabData();
  //     console.log(`Active tab: ${activeTab}`);
  //   }
  // }, [activeTab]);

  return (
    <>
      <div
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/rickAndMorty/bg_space.jpg')" }}
      >
        <main className="flex-grow container mx-auto px-6 py-12">
          {!activeTab && <IntroRickAndMorty setEnterToggle={setEnterToggle} />}

          {loading ? (
            <LoadingRickAndMorty />
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

export default RickAndMorty;
