import axios from "axios";
import { useEffect, useState } from "react";
import type { StarWarsItem } from "../types/starwars";

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
    <li className="font-mono text-cyan-300 uppercase leading-relaxed">
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
                {item.name || item.title}
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
                {item.name || item.title}
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

    case "spieces":
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

    case "starships":
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
  }
};

export default CardContainer;
