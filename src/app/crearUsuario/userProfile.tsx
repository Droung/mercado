import React from 'react';
import './userProfile.css'; 

const UserProfileForm = () => {
    return (
        <div className="profile-container">
            {/* Encabezado */}
            <header className="profile-header">
                <input type="text" className="search-bar" placeholder="Buscar..." />
                <nav className="navigation">
                    <a href="#inicio">Inicio</a>
                    <a href="#historial">Historial</a>
                    <div className="dropdown">
                        <a href="#categorias">Categorías</a>
                        <ul className="dropdown-menu">
                            <li>Opción 1</li>
                            <li>Opción 2</li>
                            <li>Opción 3</li>
                        </ul>
                    </div>
                    <a href="#perfil">Perfil</a>
                </nav>
            </header>

            {/* Contenido principal */}
            <div className="form-content">
                <div className="form-box">
                    <h2>Editar Perfil</h2>
                    <form>
                        <label htmlFor="email">Ingresa tu e-mail:</label>
                        <input type="email" id="email" name="email" />

                        <div className="name-fields">
                            <div>
                                <label htmlFor="nombre">Nombre:</label>
                                <input type="text" id="nombre" name="nombre" />
                            </div>
                            <div>
                                <label htmlFor="apellido">Apellido:</label>
                                <input type="text" id="apellido" name="apellido" />
                            </div>
                        </div>

                        <label htmlFor="telefono">Ingresa tu teléfono:</label>
                        <input type="tel" id="telefono" name="telefono" placeholder="+52" />

                        <label htmlFor="password">Contraseña:</label>
                        <input type="password" id="password" name="password" />

                        <button type="submit" className="save-button">Guardar</button>
                        <button type="button" className="exit-button">Salir</button>
                    </form>
                </div>
            </div>

            {/* Pie de página */}
            <footer className="profile-footer">
                Copyright © 2024 | Todos los derechos reservados
            </footer>
        </div>
    );
};

export default UserProfileForm;
