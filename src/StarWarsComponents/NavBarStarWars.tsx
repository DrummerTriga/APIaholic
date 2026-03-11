import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import type { NavBarProps } from "../types/starwars";

const NavBarStarWars = ({ tabs, setActiveTab }: NavBarProps) => {
  const navigate = useNavigate();
  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 5.5 }}
        className="flex justify-around border-b border-[#333] bg-black/80 backdrop-blur-md sticky top-0 z-50"
      >
        <div
          className="flex justify-center items-center h-12 my-5 w-48 border-x border-gray-700 cursor-pointer hover:rounded-xl hover:bg-gradient-to-r from-[#00ffff]/50 to-[#ff00ff]/50 transition-all duration-300"
          onClick={() => navigate("/")}
        >
          <ArrowLeft />
          Back to APIaholic!
        </div>
        {tabs &&
          Object.keys(tabs).map((item) => (
            <div
              key={item}
              className="flex justify-center items-center h-12 my-5 w-36 border-x border-gray-700 cursor-pointer hover:bg-gray-600/50 transition-all duration-300"
              onClick={() => setActiveTab(item)}
            >
              {item.charAt(0).toUpperCase()}
              {item.slice(1)}
            </div>
          ))}
      </motion.header>
    </>
  );
};
export default NavBarStarWars;
