'use client';
import Link from 'next/link';
import { FaUserCircle, FaShoppingCart, FaSearch } from 'react-icons/fa';
import styles from '../css/header.module.css';
import { useAuth } from '../backend/context/AuthContext';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const AlertifyComponent = dynamic(() => import('alertifyjs'), { ssr: false });

// Definimos la interfaz para los artículos
interface Article {
  id_articulo: number;
  nombre_articulo: string;
  costo: number;
}

const Navbar = () => {
  const { user, logout } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    logout();
    alertify.success('Sesión cerrada');
    window.location.href = '/';
  };

  const handleSearch = async () => {
    if (!searchTerm) return;

    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/articles/search?query=${encodeURIComponent(searchTerm)}`);
      if (!response.ok) {
        throw new Error('Error al buscar artículos');
      }
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error en la búsqueda:', error);
      alertify.error('Error al buscar artículos');
    } finally {
      setLoading(false);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles['search-container']}>
        <input
          type="text"
          placeholder="Buscar"
          className="text-black text-sm rounded-l-md focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch} className="bg-black px-3 py-1 rounded-r-md">
          <FaSearch className="text-white text-lg" />
        </button>
      </div>

      {loading && <p className="text-gray-500 mt-2">Buscando...</p>}

      {searchResults.length > 0 && (
        <ul className="bg-white shadow-md rounded-md mt-2 p-2">
          {searchResults.map((item) => (
            <li key={item.id_articulo} className="border-b last:border-b-0 py-2">
              <Link href={`/articles/${item.id_articulo}`} className="text-black hover:text-blue-500">
                {item.nombre_articulo} - ${item.costo}
              </Link>
            </li>
          ))}
        </ul>
      )}

      <nav className="flex items-center gap-4 ml-4">
        <Link href="/" className={styles.navLink}>
          Inicio
        </Link>
        <Link href="/history" className={styles.navLink}>
          Historial
        </Link>
        <div className={styles['category-menu']}>
          <button className="font-bold flex items-center text-sm hover:no-underline">
            Categorías <span className="ml-1">▾</span>
          </button>
          <div className={styles.dropdown}>
            <Link href="/figures" className={styles.dropdownLink}>
              Figuras
            </Link>
            <Link href="/plushies" className={styles.dropdownLink}>
              Peluches
            </Link>
            <Link href="/keychains" className={styles.dropdownLink}>
              Llaveros
            </Link>
            <Link href="/others" className={styles.dropdownLink}>
              Otros
            </Link>
          </div>
        </div>

        {/* Botón de perfil según el estado de autenticación */}
        {user ? (
          <>
            <Link href="/perfil" className={styles['profile-icon']}>
              <FaUserCircle title="Perfil" />
            </Link>
            <button onClick={handleLogout} className={styles['navLink']}>
              Cerrar Sesión
            </button>
          </>
        ) : (
          <Link href="/profile" className={styles['profile-icon']}>
            <FaUserCircle title="Iniciar Sesión" />
          </Link>
        )}

        <Link href="/carrito/" className={styles['cart-icon']}>
          <FaShoppingCart />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
