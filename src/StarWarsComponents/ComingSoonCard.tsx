interface ComingSoonProps {
  title: string;
}

const ComingSoonCard: React.FC<ComingSoonProps> = ({ title }) => {
  return (
    <div className="relative group w-full max-w-sm h-full min-h-[400px]">
      <div className="absolute -inset-0.5 bg-red-500 rounded-lg blur opacity-10 group-hover:opacity-30 transition duration-700"></div>

      <div className="relative flex flex-col h-full bg-black/40 backdrop-blur-md border border-red-900/40 rounded-lg overflow-hidden transition-all duration-300 group-hover:border-red-500/40">
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-red-500/40 to-transparent opacity-30"></div>

        <div className="p-5 flex flex-col items-center justify-center flex-grow text-center">
          <h2 className="text-lg font-bold text-red-100 uppercase tracking-widest mb-4">
            {title}
          </h2>

          <div className="py-10">
            <h1 className="text-4xl font-black text-red-600 uppercase tracking-[0.2em] animate-pulse drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]">
              Coming Soon
            </h1>
            <div className="h-[1px] w-16 bg-red-900/40 mx-auto mt-4 mb-2"></div>
            <p className="text-[10px] font-mono text-red-800 uppercase tracking-widest">
              Data Encrypted • Access Restricted
            </p>
          </div>
        </div>

        <div className="mt-auto p-3 bg-red-950/10 flex justify-between items-center border-t border-red-900/20">
          <span className="text-[8px] text-red-900 font-mono tracking-widest">
            SYSTEM_ERROR_UNAVAILABLE
          </span>
          <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse shadow-[0_0_5px_red]"></div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonCard;
