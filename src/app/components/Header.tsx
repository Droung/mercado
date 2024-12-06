import Link from "next/link";
import { FaUserCircle, FaShoppingCart, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-blue-800 text-white flex items-center justify-between px-4 py-2">

      <div className="flex items-center flex-1">
        <input
          type="text"
          placeholder="Buscar"
          className="w-full max-w-md px-3 py-1 text-black text-sm rounded-l-md focus:outline-none"
        />
        <button className="bg-black px-3 py-1 rounded-r-md">
          <FaSearch className="text-white text-lg" />
        </button>
      </div>

      <nav className="flex items-center gap-4 ml-4">
        
        <Link href="/about"
          className="font-bold text-sm"
          style={{ textShadow: "1px 1px 2px black" }}>
          Inicio
        </Link>

        <Link href="/history"
          className="font-bold text-sm"
          style={{ textShadow: "1px 1px 2px black" }}>
          Historial
        </Link>

        <div className="relative group">
          <button className="font-bold flex items-center text-sm hover:no-underline">
            Categorías <span className="ml-1">▾</span>
          </button>

          <div className="absolute left-0 hidden mt-1 bg-white text-black rounded-md shadow-lg group-hover:block">
            <Link
              href="/figures"
              className="block px-3 py-1 text-sm hover:bg-gray-200 font-bold"
              style={{ textShadow: "1px 1px 2px black" }}
            >
              Figuras
            </Link>
            <Link
              href="/plushies"
              className="block px-3 py-1 text-sm hover:bg-gray-200"
            >
              Peluches
            </Link>
            <Link
              href="/keychains"
              className="block px-3 py-1 text-sm hover:bg-gray-200"
            >
              Llaveros
            </Link>
            <Link
              href="/others"
              className="block px-3 py-1 text-sm hover:bg-gray-200"
            >
              Otros
            </Link>
          </div>
        </div>

        <Link href="/profile" className="text-2xl">
          <FaUserCircle />
        </Link>
        <Link href="/cart" className="relative text-2xl">
          <FaShoppingCart />
        </Link>
      </nav>
      
    </header>
  );
};

export default Header;
