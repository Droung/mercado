'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import '../css/createUser.css'; 
import '../css/bubble.css';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import { useRouter } from 'next/navigation';

export default function CreateUser() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        PaternlastName: '',
        MaternlastName: '',
        password: '',
        userType: '',
        termsAccepted: false,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    // Declarar handleSubmit como una función async
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.termsAccepted) {
            alert('Debes aceptar los términos y condiciones.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alertify.success('Usuario registrado con éxito');
                router.push('/profile'); // Corregido a '/profile'
            } else {
                const errorData = await response.json();
                alertify.error(`Error: ${errorData.error || 'No se pudo registrar el usuario'}`);
            }
        } catch (error) {
            console.error('Error en el registro:', error);
            alertify.error('Error del servidor');
        }
    };

    return (
        <>
            <div className="main-container">
                <div className="create-user-container">
                    <form className="create-user-form" onSubmit={handleSubmit}>
                        <h2>Crear Usuario</h2>

                        <div className="form-group">
                            <label htmlFor="email">Ingresa tu e-mail</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Correo electrónico"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <div className="form-row">
                                <div>
                                    <label htmlFor="firstName">Nombre</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        placeholder="Nombre"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="PaternlastName">Apellido Paterno</label>
                                    <input
                                        type="text"
                                        id="PaternlastName"
                                        name="PaternlastName"
                                        placeholder="Apellido Paterno"
                                        value={formData.PaternlastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="MaternlastName">Apellido Materno</label>
                                    <input
                                        type="text"
                                        id="MaternlastName"
                                        name="MaternlastName"
                                        placeholder="Apellido Materno"
                                        value={formData.MaternlastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Ingresa una contraseña</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Contraseña"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <p>Tipo de usuario</p>
                            <label>
                                <input
                                    type="radio"
                                    name="userType"
                                    value="vendedor"
                                    checked={formData.userType === 'vendedor'}
                                    onChange={handleChange}
                                    required
                                />
                                Vendedor
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="userType"
                                    value="Cliente"
                                    checked={formData.userType === 'Cliente'}
                                    onChange={handleChange}
                                    required
                                />
                                Cliente
                            </label>
                        </div>

                        <div className="form-group">
                            <label>
                                <input
                                    type="checkbox"
                                    name="termsAccepted"
                                    checked={formData.termsAccepted}
                                    onChange={handleChange}
                                    required
                                />
                                Acepto los Términos y condiciones y autorizo el uso de mis datos de acuerdo a la Declaración de Privacidad.
                            </label>
                        </div>

                        <button type="submit" className="btn-create">Crear</button>
                    </form>
                </div>    
            </div>
        </>
    );
}
