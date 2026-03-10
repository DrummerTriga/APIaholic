import { motion } from "motion/react";
import star_wars_logo from "../../public/star_wars_logo.png";

const IntroStarWars = () => {
  return (
    <>
      {/* Main Container */}
      <main className="flex-grow flex flex-col items-center justify-center p-8 relative">
        {/* "A long time ago..." Intro Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 4, times: [0, 0.2, 0.8, 1] }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center z-20 pointer-events-none"
        >
          <p
            className="text-xl md:text-2xl font-light text-[#4bd5ee] tracking-wide"
            style={{ fontFamily: '"News Cycle", sans-serif' }}
          >
            A long time ago in a galaxy far, far away....
          </p>
        </motion.div>

        {/* Star Wars Logo & Crawl Intro */}
        <motion.div
          initial={{ opacity: 0, scale: 2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 4, ease: "easeOut" }}
          className="text-center z-10 flex flex-col items-center pt-30"
        >
          <img src={star_wars_logo} className="w-200 pb-10" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 5.5 }}
            className="mt-12"
          >
            <p
              className="text-[#ffe81f] text-xl md:text-xl uppercase tracking-[0.2em] pb-4 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: '"Oswald", sans-serif' }}
            >
              Welcome to the Star Wars Archives!
            </p>
            <p
              className="text-[#ffe81f] text-xl md:text-xl uppercase tracking-[0.2em] max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: '"Oswald", sans-serif' }}
            >
              Use the navbar to journey through the galaxy...
            </p>
          </motion.div>
        </motion.div>
      </main>
    </>
  );
};

export default IntroStarWars;
