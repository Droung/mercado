"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Importar useRouter

interface Producto {
  id: string;
  nombre: string;
  precio: number;
  cantidad: number;
  imagen: string;
}

interface Direccion {
  id: string;
  codigoPostal: string;
  calle: string;
  numero: string;
  nombreCompleto: string;
  telefono: string;
}

export default function CarritoPage() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [direcciones, setDirecciones] = useState<Direccion[]>([]);
  const [direccionSeleccionada, setDireccionSeleccionada] = useState<string | null>(null);

  const router = useRouter(); // Inicializar el hook useRouter

  // Simulación del fetching desde una API
  useEffect(() => {
    setProductos([
      {
        id: '1',
        nombre: 'Figura de acción de Anime Genshin Impact Mona, 25cm...',
        precio: 812,
        cantidad: 1,
        imagen: '/images/figura_mona.png',
      },
      {
        id: '2',
        nombre: 'Figura Kurumi Tokisaki China Dress Date A Live III',
        precio: 3000,
        cantidad: 2,
        imagen: '/images/figura_kurumi.png',
      },
    ]);

    setDirecciones([
      {
        id: '1',
        codigoPostal: '91607',
        calle: 'Calle San Jerónimo 53',
        numero: '',
        nombreCompleto: 'Hector León Lucas García',
        telefono: '+52 2288606312',
      },
      {
        id: '2',
        codigoPostal: '15552',
        calle: 'Calle San Carlos 54',
        numero: '',
        nombreCompleto: 'Juan Carlos Bodoque',
        telefono: '+52 2287984563',
      },
    ]);
  }, []);

  return (
    <div className="container mx-auto p-4">
      {/* Productos del Carrito */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Productos</h2>
        <div className="space-y-4">
          {productos.map((producto) => (
            <div key={producto.id} className="p-4 shadow-md rounded-lg flex items-center justify-between bg-white">
              <img src={producto.imagen} alt={producto.nombre} className="w-16 h-16 mr-4" />
              <div className="flex-grow">
                <p className="font-semibold">{producto.nombre}</p>
                <button className="text-red-500 hover:underline mt-2">Eliminar</button>
              </div>
              <div className="flex items-center space-x-4">
                <button className="px-2 py-1 border rounded">-</button>
                <span>{producto.cantidad}</span>
                <button className="px-2 py-1 border rounded">+</button>
                <span className="font-bold text-lg">${producto.precio * producto.cantidad}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Resumen de Compra */}
      <aside className="mb-8 p-4 bg-[#E4D7BE] rounded-lg shadow-md w-full max-w-md ml-auto">
        <h2 className="text-2xl font-bold mb-4">Resumen de compra</h2>
        <div className="mb-4">
          <p>Productos ({productos.length}) <span className="float-right">${productos.reduce((total, p) => total + p.precio * p.cantidad, 0)}</span></p>
          <p>Envío <span className="float-right text-green-600">Gratis</span></p>
        </div>
        <div className="font-bold text-lg">
          <p>Total <span className="float-right">${productos.reduce((total, p) => total + p.precio * p.cantidad, 0)}</span></p>
        </div>
        <button  
          onClick={() => router.push('/checkout')} // Agregar redirección al hacer clic
          className="w-full bg-[#A66A4C] text-white py-2 mt-4 rounded">
          Continuar
        </button>
      </aside>
    </div>
  );
}
