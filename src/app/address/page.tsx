"use client";
import React, { useState } from 'react';
import '../css/address.css'
import '../css/carrito.css'
import '../css/bubble.css'
import Link from 'next/link';
export default function Address() {

    const [formData, setFormData] = useState({
        direccion: '',
        codigo_postal: '',
        estado: '',
        municipio: '',
        localidad: '',
        colonia: '',
        numeroInterior: '',
        indicaciones: '',
        tipoDomicilio: '',
        nombre: '',
        numero_telefono: '',
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
          const response = await fetch('/backend/routes/addressRoutes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            alert('Dirección registrada con éxito');
            setFormData({
              direccion: '',
              codigo_postal: '',
              estado: '',
              municipio: '',
              localidad: '',
              colonia: '',
              numeroInterior: '',
              indicaciones: '',
              tipoDomicilio: '',
              nombre: '',
              numero_telefono: '',
            });
          } else {
            alert('Error al registrar la dirección');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('Ocurrió un problema al registrar la dirección');
        }
      };

    return (
    
        <>
        <div id='main-container-address'>
            <h2 id="addressTitle">Agrega un domicilio</h2>
            <form onSubmit={handleSubmit}>
                <div className='address-container'>
                    <div>
                        <label htmlFor="direccion" >Dirección:</label><br />
                        <input placeholder='Ej. Avenida los leones' className='inputTextAddress' type="text" id="direccion" name="direccion" required value={formData.direccion} onChange={handleChange}/>
                    </div>

                    <div>
                        <label htmlFor="codigo_postal">Código Postal:</label><br />
                        <input placeholder='Ej. 98043' className='inputTextAddress' type="text" id="codigo_postal" name="codigo_postal" required value={formData.codigo_postal} onChange={handleChange} />
                    </div>
                    <div className='inputDistribution'>
                    <div>
                        <label htmlFor="estado">Estado:</label><br />
                        <input className='inputTextAddress' type="text" id="estado" name="estado" value={formData.estado} onChange={handleChange} required />
                    </div>

                    <div>
                        <label htmlFor="municipio">Municipio:</label><br />
                        <input className='inputTextAddress' type="text" id="municipio" name="municipio" value={formData.municipio} onChange={handleChange} required />
                    </div>
                    </div>
                    <div className='inputDistribution'>
                    <div>
                        <label htmlFor="localidad">Localidad:</label><br />
                        <input className='inputTextAddress' type="text" id="localidad" name="localidad" value={formData.localidad} onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="colonia">Colonia:</label><br />
                        <input className='inputTextAddress' type="text" id="colonia" name="colonia" value={formData.colonia} onChange={handleChange} required />
                    </div>
                    </div>
                    <div>
                        <label htmlFor="numeroInterior">Número Interior / Departamento (Opcional):</label><br />
                        <input className='inputTextAddress' type="text" id="numeroInterior" name="numeroInterior" value={formData.numeroInterior} onChange={handleChange}/>
                    </div>

                    <div>
                        <label htmlFor="indicaciones">Indicaciones para la entrega</label><br />
                        <textarea placeholder='Ej. Entre calles, color del edificio, no tiene timbre' className='inputTextAddress' id="indicaciones" name="indicaciones" rows="3" value={formData.indicaciones} onChange={handleChange}></textarea>
                        <h4 className='miniTextoAddress' id='contadorIndicaciones'>0/128</h4>
                    </div>

                    <div>
                        <label>Tipo de Domicilio:</label>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="tipoDomicilio"
                                    value="Residencial"
                                    checked={formData.tipoDomicilio === "Residencial"}
                                    onChange={handleChange}
                                />
                                Residencial
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="tipoDomicilio"
                                    value="Laboral"
                                    checked={formData.tipoDomicilio === "Laboral"}
                                    onChange={handleChange}
                                />
                                Laboral
                            </label>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="ddc">Datos de contacto</label><br />
                        <h4 className='miniTextoAddress'>Te llamaremos si hay un problema con la entrega</h4>
                    </div>

                    <div>
                        <label htmlFor="nombre">Nombre:</label><br />
                        <input className='inputTextAddress' type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
                    </div>

                    <div>
                        <label htmlFor="numero_telefono">Teléfono:</label><br />
                        <input className='inputTextAddress' type="text" id="numero_telefono" name="numero_telefono" value={formData.numero_telefono} onChange={handleChange} required />
                    </div>

                    <div className='buttonDistribution'>
                        
                        <Link  href="/carrito" >
                        <button className='continuar' type="button">Regresar</button>
                        </Link>

                        <button className='continuar' type="submit">Guardar</button>
                    </div>

                </div>
            </form>
        </div>

     </>   

    );
}