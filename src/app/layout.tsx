"use client";

import './globals.css';
import { useEffect, useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return <div>Loading...</div>;
  }

  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        {/* Barra de Navegación */}
        <header className="bg-[#A66A4C] text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo / Imagen a la izquierda de la barra de búsqueda */}
            <div className="flex items-center">
              <img 
                src="/logo.png" 
                
                className="h-10 w-10 mr-4" // Ajusta el tamaño según sea necesario
              />
              {/* Barra de Búsqueda Expandida */}
              <div className="flex w-full max-w-3xl">
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  className="px-4 py-2 rounded-l w-full outline-none focus:ring-2 focus:ring-mercado-brown"
                />
                <button className="bg-black text-white px-4 py-2 rounded-r">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm5.707-2.293 5.586 5.586-1.414 1.414-5.586-5.586A9.957 9.957 0 0 1 10 20c-5.523 0-10-4.477-10-10S4.477 0 10 0s10 4.477 10 10a9.957 9.957 0 0 1-2.293 6.707z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Enlaces de Navegación */}
            <nav className="flex items-center space-x-6">
              <a href="/" className="hover:underline">Inicio</a>
              <a href="/historial" className="hover:underline">Historial</a>
              <div className="relative group">
                <button className="hover:underline">Categorías</button>
                <div className="absolute hidden group-hover:block bg-white text-black p-4 mt-2 rounded shadow-lg">
                  <ul>
                    <li><a href="/categoria/1" className="hover:underline">Categoría 1</a></li>
                    <li><a href="/categoria/2" className="hover:underline">Categoría 2</a></li>
                  </ul>
                </div>
              </div>
              <a href="/perfil">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M12 2a5 5 0 0 0-5 5v1a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5zM5 20v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1H5z" />
                </svg>
              </a>
              <a href="/carrito">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M7 4h14v2H7V4zm1.243 14A3.743 3.743 0 1 0 12.243 22a3.743 3.743 0 0 0-3.743-3.743zm0 1.486a2.257 2.257 0 1 1 0 4.514 2.257 2.257 0 0 1 0-4.514zM16.757 17.486A3.743 3.743 0 1 0 20.5 21.229a3.743 3.743 0 0 0-3.743-3.743zm0 1.486a2.257 2.257 0 1 1 0 4.514 2.257 2.257 0 0 1 0-4.514z" />
                </svg>
              </a>
            </nav>
          </div>
        </header>

        {/* Contenido Principal */}
        <main className="flex-grow bg-[#E4D7BE] p-8 overflow-y-auto">
          <div className="container mx-auto">{children}</div>
        </main>

        {/* Pie de Página */}
        <footer className="bg-gray-800 text-white text-center p-4">
          <p>
            Hecha con ❤️ por parte del equipo de Chochofos Inc.
          </p>
        </footer>
      </body>
    </html>
  );
}
