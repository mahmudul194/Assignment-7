import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] max-w-3xl h-96 bg-linear-to-tr from-[#1a3b2e]/10 to-emerald-400/10 blur-3xl -z-10 rounded-full"></div>

      <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-linear-to-br from-[#1a3b2e] to-[#3a7c61] mb-2 drop-shadow-sm">
        404
      </h1>
      
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
        Brain Not Found!
      </h2>
      
      <Link 
        to="/" 
        className="group relative inline-flex items-center gap-3 bg-[#1a3b2e] text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-[#1a3b2e]/25 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
        <Home size={22} className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
        <span className="relative z-10">Home</span>
      </Link>
    </div>
  );
};

export default NotFound;
