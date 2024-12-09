import '../css/address.css'
import '../css/carrito.css'
import '../css/bubble.css'

export default function Address() {
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
                        <button className='continuar' type="button">Regresar</button>
                        <button className='continuar' type="submit">Continuar</button>
                    </div>

                </div>
            </form>
        </div>

     </>   

    );
}