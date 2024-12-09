'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import '../css/createUser.css'; 
import '../css/bubble.css'

export default function CreateUser() {
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        password: '',
        userType: '',
        termsAccepted: false,
    });

    // Tipo específico para eventos de cambio en inputs
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    // Tipo específico para el evento del formulario y acepte las condiciones
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formData.termsAccepted) {
            alert('Debes aceptar los términos y condiciones.');
            return;
        }
        console.log('Formulario enviado:', formData);
    };

    return (
        <>
        <div className="bubbles"> 
          <span style={{'--i':11}as React.CSSProperties}></span>
          <span style={{'--i':12}as React.CSSProperties}></span>
          <span style={{'--i':24}as React.CSSProperties}></span>
          <span style={{'--i':10}as React.CSSProperties}></span>
          <span style={{'--i':14}as React.CSSProperties}></span>
          <span style={{'--i':23}as React.CSSProperties}></span>
          <span style={{'--i':18}as React.CSSProperties}></span>
          <span style={{'--i':16}as React.CSSProperties}></span>
          <span style={{'--i':19}as React.CSSProperties}></span>
          <span style={{'--i':20}as React.CSSProperties}></span>
          <span style={{'--i':22}as React.CSSProperties}></span>
          <span style={{'--i':25}as React.CSSProperties}></span> 
          <span style={{'--i':18}as React.CSSProperties}></span>
          <span style={{'--i':21}as React.CSSProperties}></span>
          <span style={{'--i':15}as React.CSSProperties}></span>
          <span style={{'--i':26}as React.CSSProperties}></span>
          <span style={{'--i':17}as React.CSSProperties}></span>
          <span style={{'--i':13}as React.CSSProperties}></span>
          <span style={{'--i':28}as React.CSSProperties}></span>
          <span style={{'--i':10}as React.CSSProperties}></span>
          <span style={{'--i':14}as React.CSSProperties}></span>
          <span style={{'--i':23}as React.CSSProperties}></span>
          <span style={{'--i':11}as React.CSSProperties}></span>
          <span style={{'--i':12}as React.CSSProperties}></span>
          <span style={{'--i':24}as React.CSSProperties}></span>
          <span style={{'--i':15}as React.CSSProperties}></span>
          <span style={{'--i':12}as React.CSSProperties}></span>
          <span style={{'--i':24}as React.CSSProperties}></span>
          <span style={{'--i':15}as React.CSSProperties}></span>
        </div>

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
                                <label htmlFor="lastName">Apellido</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Apellido"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Ingresa tu teléfono</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="+52"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
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
                                value="comprador"
                                checked={formData.userType === 'comprador'}
                                onChange={handleChange}
                                required
                            />
                            Comprador
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