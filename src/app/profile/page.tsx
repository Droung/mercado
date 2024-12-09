'use client';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useState, useEffect } from 'react';
import '../css/bubble.css';
import '../css/profile.css';

export default function Profile() {
  const clientID = '919597223573-bb7q4pknpu77j6toc2i518hnav3jseh3.apps.googleusercontent.com';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log('Google OAuth initialized');
  }, []);

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
        // Guarda el token en localStorage para proteger rutas
        localStorage.setItem('token', data.token);
      } else {
        console.error('Login failed:', data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className="bubbles">
        <span style={{ '--i': 11 } as React.CSSProperties}></span>
        <span style={{ '--i': 12 } as React.CSSProperties}></span>
        <span style={{ '--i': 24 } as React.CSSProperties}></span>
        <span style={{ '--i': 10 } as React.CSSProperties}></span>
        <span style={{ '--i': 14 } as React.CSSProperties}></span>
        <span style={{ '--i': 23 } as React.CSSProperties}></span>
        <span style={{ '--i': 18 } as React.CSSProperties}></span>
        <span style={{ '--i': 16 } as React.CSSProperties}></span>
        <span style={{ '--i': 19 } as React.CSSProperties}></span>
        <span style={{ '--i': 20 } as React.CSSProperties}></span>
        <span style={{ '--i': 22 } as React.CSSProperties}></span>
        <span style={{ '--i': 25 } as React.CSSProperties}></span>
        <span style={{ '--i': 18 } as React.CSSProperties}></span>
        <span style={{ '--i': 21 } as React.CSSProperties}></span>
        <span style={{ '--i': 15 } as React.CSSProperties}></span>
      </div>

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
              <button type="button" className="btn-create">
                Crear Cuenta
              </button>
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
