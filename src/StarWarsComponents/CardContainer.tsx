import axios from "axios";
import { useEffect, useState } from "react";
import type { StarWarsItem } from "../types/starwars";
import ComingSoonCard from "./ComingSoonCard";

interface CardContainerProps {
  item: StarWarsItem;
  activeTab: string | null;
}

// Helper Component to fetch Links: Films, Ships, Vehicules, etc.
const LinkFetcher = ({ link }: { link: string }) => {
  const [label, setLabel] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    axios
      .get(link)
      .then((res) => {
        if (isMounted) {
          setLabel(res.data.name || res.data.title);
          setLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) setLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, [link]);

  return (
    <li className="font-mono text-cyan-300 uppercase leading-relaxed list-none">
      {loading ? (
        <span className="animate-pulse text-cyan-900">Fetching...</span>
      ) : (
        label
      )}
    </li>
  );
};

const CardContainer = ({ item, activeTab }: CardContainerProps) => {
  const tab = activeTab?.toLowerCase();

  // stwich to alternate content between tabs
  switch (tab) {
    case "people":
      return (
        <div className="relative group w-full max-w-sm">
          <div className="absolute -inset-0.5 bg-cyan-500 rounded-lg blur opacity-10 group-hover:opacity-40 transition duration-700"></div>

          <div className="relative flex flex-col h-full bg-black/40 backdrop-blur-md border border-cyan-900/40 rounded-lg overflow-hidden transition-all duration-300 group-hover:border-cyan-400/60">
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div>

            <div className="p-5">
              <h2 className="text-lg font-bold text-cyan-100 uppercase tracking-widest mb-4">
                {item.name}
              </h2>

              <div className="space-y-3 text-xs">
                {item.birth_year && (
                  <div className="flex justify-between border-b border-cyan-900/20 pb-1">
                    <span className="text-cyan-600 font-bold uppercase">
                      Birth Year
                    </span>
                    <span className="font-mono text-cyan-300">
                      {item.birth_year}
                    </span>
                  </div>
                )}
                {item.gender && (
                  <div className="flex justify-between border-b border-cyan-900/20 pb-1">
                    <span className="text-cyan-600 font-bold uppercase">
                      Gender
                    </span>
                    <span className="font-mono text-cyan-300 capitalize">
                      {item.gender}
                    </span>
                  </div>
                )}
                {item.height && (
                  <div className="flex justify-between border-b border-cyan-900/20 pb-1">
                    <span className="text-cyan-600 font-bold uppercase">
                      Height
                    </span>
                    <span className="font-mono text-cyan-300">
                      {item.height} cm
                    </span>
                  </div>
                )}
                {item.eye_color && (
                  <div className="flex justify-between border-b border-cyan-900/20 pb-1">
                    <span className="text-cyan-600 font-bold uppercase">
                      Eye Color
                    </span>
                    <span className="font-mono text-cyan-300 capitalize">
                      {item.eye_color}
                    </span>
                  </div>
                )}
                {item.hair_color && (
                  <div className="flex justify-between border-b border-cyan-900/20 pb-1">
                    <span className="text-cyan-600 font-bold uppercase">
                      Hair Color
                    </span>
                    <span className="font-mono text-cyan-300 capitalize">
                      {item.hair_color}
                    </span>
                  </div>
                )}
                {item.skin_color && (
                  <div className="flex justify-between border-b border-cyan-900/20 pb-1">
                    <span className="text-cyan-600 font-bold uppercase">
                      Skin Color
                    </span>
                    <span className="font-mono text-cyan-300 capitalize">
                      {item.skin_color}
                    </span>
                  </div>
                )}
                {item.species && (
                  <div className="flex justify-between border-b border-cyan-900/20 pb-1">
                    <span className="text-cyan-600 font-bold uppercase">
                      Species
                    </span>
                    {item.species.length > 0 ? (
                      <ul>
                        {item.species.map((specie) => (
                          <LinkFetcher key={specie} link={specie} />
                        ))}
                      </ul>
                    ) : (
                      <span className="font-mono text-cyan-300 capitalize">
                        n/a
                      </span>
                    )}
                  </div>
                )}
                {item.films && (
                  <div className="flex justify-between border-b border-cyan-900/20 pb-1">
                    <span className="text-cyan-600 font-bold uppercase">
                      Films
                    </span>
                    {item.films.length > 0 ? (
                      <ul>
                        {item.films.map((film) => (
                          <LinkFetcher key={film} link={film} />
                        ))}
                      </ul>
                    ) : (
                      <span className="font-mono text-cyan-300 capitalize">
                        n/a
                      </span>
                    )}
                  </div>
                )}

                {item.starships && (
                  <div className="flex justify-between border-b border-cyan-900/20 pb-1">
                    <span className="text-cyan-600 font-bold uppercase">
                      Starships
                    </span>
                    {item.starships.length > 0 ? (
                      <ul>
                        {item.starships.map((ship) => (
                          <LinkFetcher key={ship} link={ship} />
                        ))}
                      </ul>
                    ) : (
                      <span className="font-mono text-cyan-300 capitalize">
                        n/a
                      </span>
                    )}
                  </div>
                )}
                {item.vehicles && (
                  <div className="flex justify-between border-b border-cyan-900/20 pb-1">
                    <span className="text-cyan-600 font-bold uppercase">
                      Vehicles
                    </span>
                    {item.vehicles.length > 0 ? (
                      <ul>
                        {item.vehicles.map((vehicle) => (
                          <LinkFetcher key={vehicle} link={vehicle} />
                        ))}
                      </ul>
                    ) : (
                      <span className="font-mono text-cyan-300 capitalize">
                        n/a
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-auto p-3 bg-cyan-950/10 flex justify-between items-center border-t border-cyan-900/20">
              <span className="text-[8px] text-cyan-800 font-mono tracking-widest">
                ENCRYPTED DATA
              </span>
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_5px_cyan]"></div>
            </div>
          </div>
        </div>
      );

    case "planets":
      return (
        <div className="relative group w-full max-w-sm">
          <div className="absolute -inset-0.5 bg-cyan-500 rounded-lg blur opacity-10 group-hover:opacity-40 transition duration-700"></div>

          <div className="relative flex flex-col h-full bg-black/40 backdrop-blur-md border border-cyan-900/40 rounded-lg overflow-hidden transition-all duration-300 group-hover:border-cyan-400/60">
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div>

            <div className="p-5">
              <h2 className="text-lg font-bold text-cyan-100 uppercase tracking-widest mb-4">
                {item.name}
              </h2>

              <div className="space-y-3 text-xs">
                {item.population && (
                  <div className="flex justify-between border-b border-cyan-900/20 pb-1">
                    <span className="text-cyan-600 font-bold uppercase">
                      Population
                    </span>
                    <span className="font-mono text-cyan-300">
                      {item.population}
                    </span>
                  </div>
                )}
                {item.diameter && (
                  <div className="flex justify-between border-b border-cyan-900/20 pb-1">
                    <span className="text-cyan-600 font-bold uppercase">
                      Diameter
                    </span>
                    <span className="font-mono text-cyan-300">
                      {item.diameter}
                    </span>
                  </div>
                )}
                {item.climate && (
                  <div className="flex justify-between border-b border-cyan-900/20 pb-1">
                    <span className="text-cyan-600 font-bold uppercase">
                      Climate
                    </span>
                    <span className="font-mono text-cyan-300 capitalize">
                      {item.climate}
                    </span>
                  </div>
                )}
                {item.terrain && (
                  <div className="flex justify-between border-b border-cyan-900/20 pb-1">
                    <span className="text-cyan-600 font-bold uppercase">
                      Terrain
                    </span>
                    <span className="font-mono text-cyan-300 capitalize">
                      {item.terrain}
                    </span>
                  </div>
                )}
                {item.gravity && (
                  <div className="flex justify-between border-b border-cyan-900/20 pb-1">
                    <span className="text-cyan-600 font-bold uppercase">
                      Gravity
                    </span>
                    <span className="font-mono text-cyan-300 capitalize">
                      {item.gravity}
                    </span>
                  </div>
                )}
                {item.orbital_period && (
                  <div className="flex justify-between border-b border-cyan-900/20 pb-1">
                    <span className="text-cyan-600 font-bold uppercase">
                      Orbital Period
                    </span>
                    <span className="font-mono text-cyan-300 capitalize">
                      {item.orbital_period}
                    </span>
                  </div>
                )}
                {item.rotation_period && (
                  <div className="flex justify-between border-b border-cyan-900/20 pb-1">
                    <span className="text-cyan-600 font-bold uppercase">
                      Rotation Period
                    </span>
                    <span className="font-mono text-cyan-300 capitalize">
                      {item.orbital_period}
                    </span>
                  </div>
                )}
                {item.films && (
                  <div className="flex justify-between border-b border-cyan-900/20 pb-1">
                    <span className="text-cyan-600 font-bold uppercase">
                      Films
                    </span>
                    {item.films.length > 0 ? (
                      <ul>
                        {item.films.map((film) => (
                          <LinkFetcher key={film} link={film} />
                        ))}
                      </ul>
                    ) : (
                      <span className="font-mono text-cyan-300 capitalize">
                        n/a
                      </span>
                    )}
                  </div>
                )}
                {item.residents && (
                  <div className="flex justify-between border-b border-cyan-900/20 pb-1">
                    <span className="text-cyan-600 font-bold uppercase">
                      Residents
                    </span>
                    {item.residents.length > 0 ? (
                      <ul>
                        {item.residents.map((resident) => (
                          <LinkFetcher key={resident} link={resident} />
                        ))}
                      </ul>
                    ) : (
                      <span className="font-mono text-cyan-300 capitalize">
                        n/a
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-auto p-3 bg-cyan-950/10 flex justify-between items-center border-t border-cyan-900/20">
              <span className="text-[8px] text-cyan-800 font-mono tracking-widest">
                ENCRYPTED DATA
              </span>
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_5px_cyan]"></div>
            </div>
          </div>
        </div>
      );

    case "films":
      return (
        <div className="relative group w-full max-w-sm">
          <div className="absolute -inset-0.5 bg-cyan-500 rounded-lg blur opacity-10 group-hover:opacity-40 transition duration-700"></div>

          <div className="relative flex flex-col h-full bg-black/40 backdrop-blur-md border border-cyan-900/40 rounded-lg overflow-hidden transition-all duration-300 group-hover:border-cyan-400/60">
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div>

            <div className="p-5">
              <h2 className="text-lg font-bold text-cyan-100 uppercase tracking-widest mb-4">
                {item.title}
              </h2>

              <div className="space-y-3 text-xs">
                {item.episode_id && (
                  <div className="flex justify-between border-b border-cyan-900/20 pb-1">
                    <span className="text-cyan-600 font-bold uppercase">
                      Episode
                    </span>
                    <span className="font-mono text-cyan-300">
                      {item.episode_id}
                    </span>
                  </div>
                )}
                {/* {item.opening_crawl && (
                  <div className="flex justify-between border-b border-cyan-900/20 pb-1">
                    <span className="text-cyan-600 font-bold uppercase">
                      Opening Crawl
                    </span>
                    <span className="font-mono text-cyan-300 capitalize">
                      {item.opening_crawl}
                    </span>
                  </div>
                )} */}
                {item.director && (
                  <div className="flex justify-between border-b border-cyan-900/20 pb-1">
                    <span className="text-cyan-600 font-bold uppercase">
                      Director
                    </span>
                    <span className="font-mono text-cyan-300">
                      {item.director}
                    </span>
                  </div>
                )}
                {item.producer && (
                  <div className="flex justify-between border-b border-cyan-900/20 pb-1">
                    <span className="text-cyan-600 font-bold uppercase">
                      Producer(s)
                    </span>
                    <span className="font-mono text-cyan-300">
                      {item.producer}
                    </span>
                  </div>
                )}

                {item.characters && (
                  <div className="flex justify-between border-b border-cyan-900/20 pb-1">
                    <span className="text-cyan-600 font-bold uppercase">
                      Characters
                    </span>
                    {item.characters.length > 0 ? (
                      <ul>
                        {item.characters.map((character) => (
                          <LinkFetcher key={character} link={character} />
                        ))}
                      </ul>
                    ) : (
                      <span className="font-mono text-cyan-300 capitalize">
                        n/a
                      </span>
                    )}
                  </div>
                )}
                {item.planets && (
                  <div className="flex justify-between border-b border-cyan-900/20 pb-1">
                    <span className="text-cyan-600 font-bold uppercase">
                      Planets
                    </span>
                    {item.planets.length > 0 ? (
                      <ul>
                        {item.characters.map((planet) => (
                          <LinkFetcher key={planet} link={planet} />
                        ))}
                      </ul>
                    ) : (
                      <span className="font-mono text-cyan-300 capitalize">
                        n/a
                      </span>
                    )}
                  </div>
                )}
                {item.species && (
                  <div className="flex justify-between border-b border-cyan-900/20 pb-1">
                    <span className="text-cyan-600 font-bold uppercase">
                      Species
                    </span>
                    {item.species.length > 0 ? (
                      <ul>
                        {item.characters.map((specie) => (
                          <LinkFetcher key={specie} link={specie} />
                        ))}
                      </ul>
                    ) : (
                      <span className="font-mono text-cyan-300 capitalize">
                        n/a
                      </span>
                    )}
                  </div>
                )}
                {item.starships && (
                  <div className="flex justify-between border-b border-cyan-900/20 pb-1">
                    <span className="text-cyan-600 font-bold uppercase">
                      Starships
                    </span>
                    {item.starships.length > 0 ? (
                      <ul>
                        {item.characters.map((starship) => (
                          <LinkFetcher key={starship} link={starship} />
                        ))}
                      </ul>
                    ) : (
                      <span className="font-mono text-cyan-300 capitalize">
                        n/a
                      </span>
                    )}
                  </div>
                )}
                {item.vehicles && (
                  <div className="flex justify-between border-b border-cyan-900/20 pb-1">
                    <span className="text-cyan-600 font-bold uppercase">
                      Vehicles
                    </span>
                    {item.vehicles.length > 0 ? (
                      <ul>
                        {item.characters.map((vehicle) => (
                          <LinkFetcher key={vehicle} link={vehicle} />
                        ))}
                      </ul>
                    ) : (
                      <span className="font-mono text-cyan-300 capitalize">
                        n/a
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-auto p-3 bg-cyan-950/10 flex justify-between items-center border-t border-cyan-900/20">
              <span className="text-[8px] text-cyan-800 font-mono tracking-widest">
                ENCRYPTED DATA
              </span>
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_5px_cyan]"></div>
            </div>
          </div>
        </div>
      );

    case "species":
      return (
        <div className="relative group w-full max-w-sm">
          <div className="absolute -inset-0.5 bg-cyan-500 rounded-lg blur opacity-10 group-hover:opacity-40 transition duration-700"></div>

          <div className="relative flex flex-col h-full bg-black/40 backdrop-blur-md border border-cyan-900/40 rounded-lg overflow-hidden transition-all duration-300 group-hover:border-cyan-400/60">
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div>

            <div className="p-5">
              <h2 className="text-lg font-bold text-cyan-100 uppercase tracking-widest mb-4">
                {item.name || item.title}
              </h2>

              <div className="space-y-3 text-xs">
                {item.classification && (
                  <div className="flex justify-between border-b border-cyan-900/20 pb-1">
                    <span className="text-cyan-600 font-bold uppercase">
                      Classification
                    </span>
                    <span className="font-mono text-cyan-300 capitalize">
                      {item.classification}
                    </span>
                  </div>
                )}

                {item.language && (
                  <div className="flex justify-between border-b border-cyan-900/20 pb-1">
                    <span className="text-cyan-600 font-bold uppercase">
                      Language
                    </span>
                    <span className="font-mono text-cyan-300 capitalize">
                      {item.language}
                    </span>
                  </div>
                )}

                {item.average_height && (
                  <div className="flex justify-between border-b border-cyan-900/20 pb-1">
                    <span className="text-cyan-600 font-bold uppercase">
                      Height
                    </span>
                    <span className="font-mono text-cyan-300">
                      {item.average_height} cm
                    </span>
                  </div>
                )}

                {item.average_lifespan && (
                  <div className="flex justify-between border-b border-cyan-900/20 pb-1">
                    <span className="text-cyan-600 font-bold uppercase">
                      Lifespan
                    </span>
                    <span className="font-mono text-cyan-300">
                      {item.average_lifespan} years
                    </span>
                  </div>
                )}

                {item.skin_colors && (
                  <div className="flex justify-between border-b border-cyan-900/20 pb-1">
                    <span className="text-cyan-600 font-bold uppercase">
                      Skin Colors
                    </span>
                    <span className="font-mono text-cyan-300 capitalize text-right ml-4">
                      {item.skin_colors}
                    </span>
                  </div>
                )}

                {item.homeworld && (
                  <div className="flex justify-between border-b border-cyan-900/20 pb-1">
                    <span className="text-cyan-600 font-bold uppercase">
                      Homeworld
                    </span>
                    <LinkFetcher link={item.homeworld} />
                  </div>
                )}

                {item.people && (
                  <div className="flex justify-between border-b border-cyan-900/20 pb-1">
                    <span className="text-cyan-600 font-bold uppercase">
                      People
                    </span>
                    {item.people.length > 0 ? (
                      <ul>
                        {item.people.map((person) => (
                          <LinkFetcher key={person} link={person} />
                        ))}
                      </ul>
                    ) : (
                      <span className="font-mono text-cyan-300 capitalize">
                        n/a
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-auto p-3 bg-cyan-950/10 flex justify-between items-center border-t border-cyan-900/20">
              <span className="text-[8px] text-cyan-800 font-mono tracking-widest">
                ENCRYPTED DATA
              </span>
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_5px_cyan]"></div>
            </div>
          </div>
        </div>
      );
    case "vehicles":
      return <ComingSoonCard title="Vehicles" />;

    case "starships":
      return <ComingSoonCard title="Starships" />;

    default:
      return null;
  }
};

export default CardContainer;
