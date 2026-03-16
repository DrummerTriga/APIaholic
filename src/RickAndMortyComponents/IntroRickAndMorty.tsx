import { motion } from "motion/react";
import rick_and_morty_logo from "../../public/rickAndMorty/rick_and_morty_logo.png";

const IntroRickAndMorty = ({
  setEnterToggle,
}: {
  setEnterToggle: (val: boolean) => void;
}) => {
  return (
    <>
      {/* Main Container */}
      <main className="flex-grow flex flex-col items-center justify-center p-8 relative">
        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2, times: [0, 0.2, 0.8, 1] }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center z-20 pointer-events-none"
        >
          <p
            className="text-4xl md:text-6xl font-black text-[#97ce4c] tracking-tighter uppercase italic"
            style={{
              fontFamily: "sans-serif", // Podes trocar por "Archivo Black" se tiveres a fonte
              filter: "drop-shadow(4px 4px 0px #000)",
              WebkitTextStroke: "1.5px #000",
            }}
          >
            Wubba Lubba Dub-Dub!
          </p>
        </motion.div>

        {/* Rick and Morty Logo Intro */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 4,
          }}
          className="text-center z-10 flex flex-col items-center"
        >
          {/* Logo com efeito de brilho (Glow) Verde */}
          <img
            src={rick_and_morty_logo}
            className="w-115 pb-5 drop-shadow-[0_0_20px_rgba(151,206,76,0.6)]"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 5.5 }}
            className="mt-6 px-4"
          >
            {/* Frase Principal: Estilo Cartoon/Portal */}
            <motion.p
              animate={{
                x: [0, -1, 1, -1, 1, 0], // Efeito de vibração leve (glitch)
              }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="flex items-center justify-center text-[#97ce4c] text-xl md:text-3xl font-black uppercase italic tracking-tighter drop-shadow-[3px_3px_0px_#000]"
              style={{
                fontFamily: "sans-serif", // Idealmente usar "Archivo Black" ou "arial black"
                WebkitTextStroke: "1px #000",
              }}
            >
              Let's get started?
              <img
                onClick={() => setEnterToggle(true)}
                src="../../public/rickAndMorty/portal_gun.png"
                className="w-20"
              />
            </motion.p>
          </motion.div>
        </motion.div>
      </main>
    </>
  );
};

export default IntroRickAndMorty;
