// src/app/perfil/page.jsx
'use client';
import { useEffect, useState } from 'react';
import { useAuth } from '../backend/context/AuthContext';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

export default function Perfil() {
  const { user, logout } = useAuth();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (!user) {
      alertify.error('Por favor inicia sesión para acceder a tu perfil');
      window.location.href = '/';
      return;
    }

    const fetchUserData = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/auth/user', {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        if (!res.ok) {
          console.log(user.token);
          throw new Error('Error al obtener los datos del usuario');
        }

        const data = await res.json();
        setUserData(data);
      } catch (error) {
        console.error('Error:', error);
        alertify.error('Error al cargar los datos del perfil');
      }
    };

    fetchUserData();
  }, [user]);

  const handleLogout = () => {
    logout();
    alertify.success('Sesión cerrada');
    window.location.href = '/';
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">Perfil del Usuario</h1>

      {userData ? (
        <div className="space-y-4">
          <p className="text-lg">
            <strong className="text-gray-600">Nombre:</strong> {userData.nombre}
          </p>
          <p className="text-lg">
            <strong className="text-gray-600">Apellido Paterno:</strong> {userData.apellido_paterno}
          </p>
          <p className="text-lg">
            <strong className="text-gray-600">Apellido Materno:</strong> {userData.apellido_materno}
          </p>
          <p className="text-lg">
            <strong className="text-gray-600">Tipo de Usuario:</strong> {userData.tipoUsuario}
          </p>
          <p className="text-lg">
            <strong className="text-gray-600">Pedidos:</strong> {userData.pedidos.join(', ')}
          </p>

         
        </div>
      ) : (
        <p className="text-center text-gray-500">Cargando datos del perfil...</p>
      )}
    </div>
  );
}
