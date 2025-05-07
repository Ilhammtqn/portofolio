import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white shadow z-50 px-6 py-4 flex justify-between items-center font-semibold text-gray-800">
      <Link to='Home' className="text-xl font-bold">
        Portofolio
      </Link>

      {/* Navigasi di kanan */}
      <div className="flex space-x-8">
        {['Home', 'Projects', 'Certificate', 'Resume', 'Contact'].map((label) => (
          <Link
            key={label}
            to={label.toLowerCase()}
            smooth={true}
            duration={100}
            className="cursor-pointer relative group transition-all"
          >
            <span className="group-hover:text-purple-600 transition-colors">
              {label}
            </span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-600 transition-all group-hover:w-full"></span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
