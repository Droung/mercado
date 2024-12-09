// app/components/Navbar.tsx
'use client';
import Link from 'next/link';
import { FaUserCircle, FaShoppingCart, FaSearch } from 'react-icons/fa';
import styles from '../css/header.module.css';
import { useAuth } from '../backend/context/AuthContext';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

const Navbar = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    alertify.success('Sesión cerrada');
    window.location.href = '/';
  };

  return (
    <header className={styles.header}>
      <div className={styles['search-container']}>
        <input
          type="text"
          placeholder="Buscar"
          className="text-black text-sm rounded-l-md focus:outline-none"
        />
        <button className="bg-black px-3 py-1 rounded-r-md">
          <FaSearch className="text-white text-lg" />
        </button>
      </div>

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
