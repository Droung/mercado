import React from 'react';
import '../css/bubble.css'
import '../css/vistuser.css'

const UserProfileForm = () => {
    return (
        <>
        <div className="profile-container">
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
                        <button type="button" className="exit-button">Salir de la cuenta </button>
                    </form>
                </div>
            </div>

        </div>
        </>
    );
};

export default UserProfileForm;