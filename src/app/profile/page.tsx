'use client';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useState, useEffect } from 'react';
import '../css/bubble.css';
import '../css/profile.css';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import Link from 'next/link';
import { useAuth } from '../backend/context/AuthContext';

export default function Profile() {
  const clientID = '919597223573-bb7q4pknpu77j6toc2i518hnav3jseh3.apps.googleusercontent.com';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, login } = useAuth();

  useEffect(() => {
   
  }, [user]);

  const onSuccess = (response: any) => {
    console.log('Login Success:', response);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        console.log('Login successful:', data);
        localStorage.setItem('token', data.token);
        login(data.token); // Guardar el token en el contexto

        alertify.success('Inicio de sesión exitoso');

        // Redirigir según el tipo de usuario
        if (data.tipoUsuario === 'vendedor') {
          window.location.href = '/vend';
        } else {
          window.location.href = '/';
        }
      } else {
        console.error('Error:', data.error);
        alertify.error(data.error || 'Ocurrió un error al intentar iniciar sesión');
      }
    } catch (error) {
      console.error('Error:', error);
      alertify.error('Error del servidor');
    }
  };

  return (
    <>
      <GoogleOAuthProvider clientId={clientID}>
        <div className="panel">
          <form onSubmit={handleLogin} className="text-inputs">
            <label htmlFor="email" className="label">
              E-mail:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="text-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password" className="label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="text-box"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="btns">
              <button type="submit" className="btn-login">
                Iniciar Sesión
              </button>

              <Link href="/createuser">
                <button type="button" className="btn-create">
                  Crear Cuenta
                </button>
              </Link>
            </div>
          </form>

          <div className="btn">
            <GoogleLogin onSuccess={onSuccess} />
          </div>
        </div>
      </GoogleOAuthProvider>
    </>
  );
}