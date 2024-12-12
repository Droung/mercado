import '../css/address.css'
import '../css/carrito.css'
import '../css/bubble.css'
import Link from 'next/link';
export default function editAddress() {
    return (
    
        <>
        <div id='main-container-address'>
            <h2 id="addressTitle">Agrega un domicilio</h2>
            <form >
                <div className='address-container'>
                    <div>
                        <label htmlFor="direccion" >Dirección:</label><br />
                        <input placeholder='Ej. Avenida los leones' className='inputTextAddress' type="text" id="direccion" name="direccion" required />
                    </div>

                    <div>
                        <label htmlFor="codigoPostal">Código Postal:</label><br />
                        <input placeholder='Ej. 98043' className='inputTextAddress' type="text" id="codigoPostal" name="codigoPostal" required />
                    </div>
                    <div className='inputDistribution'>
                    <div>
                        <label htmlFor="estado">Estado:</label><br />
                        <input className='inputTextAddress' type="text" id="estado" name="estado" required />
                    </div>

                    <div>
                        <label htmlFor="municipio">Municipio:</label><br />
                        <input className='inputTextAddress' type="text" id="municipio" name="municipio" required />
                    </div>
                    </div>
                    <div className='inputDistribution'>
                    <div>
                        <label htmlFor="localidad">Localidad:</label><br />
                        <input className='inputTextAddress' type="text" id="localidad" name="localidad" required />
                    </div>

                    <div>
                        <label htmlFor="colonia">Colonia:</label><br />
                        <input className='inputTextAddress' type="text" id="colonia" name="colonia" required />
                    </div>
                    </div>
                    <div>
                        <label htmlFor="numeroInterior">Número Interior / Departamento (Opcional):</label><br />
                        <input className='inputTextAddress' type="text" id="numeroInterior" name="numeroInterior" />
                    </div>

                    <div>
                        <label htmlFor="indicaciones">Indicaciones para la entrega</label><br />
                        <textarea placeholder='Ej. Entre calles, color del edificio, no tiene timbre' className='inputTextAddress' id="indicaciones" name="indicaciones" rows="3"></textarea>
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
                        <input className='inputTextAddress' type="text" id="nombre" name="nombre" required />
                    </div>

                    <div>
                        <label htmlFor="telefono">Teléfono:</label><br />
                        <input className='inputTextAddress' type="text" id="telefono" name="telefono" required />
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