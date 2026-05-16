import { NavLink, Link } from 'react-router-dom';
import { Home, Clock, BarChart } from 'lucide-react';

const Navbar = () => {
    const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={18} /> },
    { name: 'Timeline', path: '/timeline', icon: <Clock size={18} /> },
    { name: 'Stats', path: '/stats', icon: <BarChart size={18} /> },
  ];
    return (
        <div>
             <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 py-3 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-[#1a3b2e]">KeenKeeper</span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-[#1a3b2e] text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-50'
                }`
              }
            >
              {link.icon}
              <span className="hidden sm:inline">{link.name}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
        </div>
    );
};

export default Navbar;