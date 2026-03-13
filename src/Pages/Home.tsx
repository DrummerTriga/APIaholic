import { motion } from "motion/react";
import { Link } from "react-router-dom";
import marvel_cover from "../../public/marvel_cover.jpg";
import pokemon_cover from "../../public/pokemon_cover.jpg";
import rickmorty_cover from "../../public/rickmorty_cover.jpg";
import star_wars_cover from "../../public/starWars/star_wars_cover.jpg";

const apis = [
  {
    id: "star-wars",
    name: "Star Wars",
    path: "/star-wars",
    image: star_wars_cover,
    status: "initialized",
  },
  {
    id: "pokemon",
    name: "Pokemon",
    path: "/", //under development
    image: pokemon_cover,
    status: "under development",
  },
  {
    id: "rick-and-morty",
    name: "Rick & Morty",
    path: "/", //under development
    image: rickmorty_cover,
    status: "under development",
  },
  {
    id: "marvel",
    name: "Marvel",
    path: "/", //under development
    image: marvel_cover,
    status: "under development",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative mb-24 mt-12 text-center w-full max-w-4xl h-72 flex flex-col items-center justify-center"
      >
        {/* Synthwave Sun Background */}
        <div className="sun-container">
          <div className="sun-grid"></div>
        </div>

        {/* Text Overlay */}
        <div className="relative z-10 flex items-center justify-center w-full">
          <div className="relative mt-14 inline-block font-pixel text-5xl md:text-7xl lg:text-8xl tracking-tighter">
            {/* API - Absolutely positioned to float over AHOLIC */}
            <h2 className="absolute -top-14 md:-top-22 lg:-top-26 left-1/2 transform -translate-x-1/2 -rotate-6 font-script text-7xl md:text-9xl text-[#00ffff] text-shadow-script z-20 whitespace-nowrap">
              API
            </h2>

            {/* Shadow and Extrusion */}
            <span
              className="absolute top- left-0 text-[#001f4d] text-extrusion"
              aria-hidden="true"
            >
              AHOLIC
            </span>
            {/* Gradient Face */}
            <span
              className="relative z-10 text-gradient-synth"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}
            >
              AHOLIC
            </span>
          </div>
        </div>
      </motion.div>

      {/* Grid Section */}
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 relative z-10 px-4">
        {apis.map((api, index) => (
          <motion.div
            key={api.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link
              to={api.path}
              className="block group"
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className="relative overflow-hidden rounded-xl border-2 border-[#00ffff] bg-[#1a0b2e]/80 backdrop-blur-md box-shadow-synthwave transition-all duration-300 group-hover:border-[#ff00ff] group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(255,0,255,0.5),inset_0_0_15px_rgba(255,0,255,0.3)]">
                <div className="aspect-video relative overflow-hidden border-b-2 border-[#00ffff] group-hover:border-[#ff00ff] transition-colors duration-300">
                  <img
                    src={api.image}
                    alt={api.name}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300 mix-blend-luminosity group-hover:mix-blend-normal"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b2e] to-transparent opacity-80"></div>
                </div>

                <div className="p-6 flex flex-col items-center justify-center">
                  <h2 className="font-pixel text-xl md:text-2xl text-center text-transparent bg-clip-text bg-gradient-to-r from-[#00ffff] to-[#ff00ff] uppercase tracking-wider">
                    {api.name}
                  </h2>
                  <div className="mt-4 font-script text-3xl text-[#00ffff] opacity-100 group-hover:scale-120 transition-scale duration-300">
                    {api.status === "under development"
                      ? "Coming Soon"
                      : "Discover more!"}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
