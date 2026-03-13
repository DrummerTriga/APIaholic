const LoadingStarWars = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full gap-6">
      <div className="w-56 md:w-68 overflow-hidden rounded-lg shadow-[0_0_20px_rgba(34,211,238,0.2)]">
        <img
          src="/starWars/starwars_loading.gif"
          alt="Loading..."
          className="w-full h-auto object-contain opacity-80"
        />
      </div>

      <div className="flex flex-col items-center gap-1">
        <h3 className="text-xl font-bold text-cyan-100 uppercase tracking-[0.4em] animate-pulse drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
          Accessing Archives
        </h3>{" "}
        <div className="w-12 h-[2px] bg-cyan-900 mt-2"></div>
      </div>
    </div>
  );
};

export default LoadingStarWars;
