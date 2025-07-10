
import { useState } from 'react';
import { Menu, X, User, LogIn } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'الرئيسية', path: '/', icon: '🏠' },
    { name: 'الدروس', path: '/lessons', icon: '📚' },
    { name: 'المشاريع', path: '/projects', icon: '🚀' },
    { name: 'عن الموقع', path: '/about', icon: 'ℹ️' },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="bg-yellow-400 rounded-full p-2">
              <span className="text-2xl">💻</span>
            </div>
            <span className="text-white text-2xl font-bold">كود كيدز</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 rounded-lg transition-all duration-300 ${
                  isActive(item.path)
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
            <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-medium hover:bg-yellow-300 transition-colors flex items-center space-x-2 rtl:space-x-reverse">
              <LogIn size={20} />
              <span>تسجيل الدخول</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-sm rounded-lg mb-4 p-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-3 rtl:space-x-reverse py-3 px-2 rounded-lg transition-all ${
                  isActive(item.path)
                    ? 'bg-white text-blue-600'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
            <button className="w-full mt-3 bg-yellow-400 text-blue-900 py-2 rounded-lg font-medium flex items-center justify-center space-x-2 rtl:space-x-reverse">
              <LogIn size={20} />
              <span>تسجيل الدخول</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
