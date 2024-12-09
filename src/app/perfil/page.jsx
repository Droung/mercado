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
    // Verificar si el usuario está autenticado
    if (!user) {
      alertify.error('Por favor inicia sesión para acceder a tu perfil');
      window.location.href = '/';
      return;
    }

    // Obtener información del usuario desde el servidor
    const fetchUserData = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/auth/user', {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        if (!res.ok) {
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
    <>
    
    <div className="perfil-container">
      <h1>Perfil del Usuario</h1>

      {userData ? (
        <div>
          <p><strong>Nombre:</strong> {userData.nombre}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Dirección:</strong> {userData.direccion}</p>
          <p><strong>Tipo de Usuario:</strong> {userData.tipoUsuario}</p>
          <p><strong>Pedidos:</strong> {userData.pedidos.join(', ')}</p>

          <button onClick={handleLogout} className="btn-logout">Cerrar Sesión</button>
        </div>
      ) : (
        <p>Cargando datos del perfil...</p>
      )}
    </div>
    </>
  );
}
