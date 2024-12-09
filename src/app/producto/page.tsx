'use client'; 

import '../css/produc.css';
import '../css/bubble.css';
import Carousel from '../components/Carousel';

export default function Producto() {
  return (
    <>
      <div className="Contenedor">
        <h1 className='Titulo'></h1>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '20px' }}>
            
            <img src="/img/jjk.jpg" alt="Imagen pequeña" style={{ width: '50px', height: '50px', marginRight: '20px' }} />
            
            <img
              src="/img/jjk.jpg"
              alt="Imagen grande"
              style={{
                width: '600px',
                height: '600px',
                objectFit: 'contain',
                maxWidth: '100%',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
                marginRight: '10px' 
              }}
            />

            <div
              style={{
                width: '300px',
                height: '600px',
                backgroundColor: '#f4f4f4', 
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
                padding: '20px',
                borderRadius: '8px', 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >

              <h3 style={{
                margin: '0', 
                fontSize: '26px', 
                fontWeight: 'bold', 
                color: '#333', 
                textTransform: 'uppercase',
                letterSpacing: '2px', 
                textAlign: 'center', 
                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.2)'
              }}>
                Nombre del Producto
              </h3>
              
              <p style={{
                margin: '10px 0', 
                fontSize: '15px', 
                color: '#666', 
                fontFamily: 'Arial, sans-serif',
                lineHeight: '1.6',
                textAlign: 'justify',
                fontStyle: 'italic',
              }}>
                Esta es una descripción breve del producto. Aquí puedes detallar las características principales del producto. Es ideal para quienes buscan calidad y diseño en un solo lugar.
              </p>

             
              <p style={{
                margin: '10px 0', 
                fontSize: '20px', 
                fontWeight: 'bold', 
                color: '#E94E77', 
                textAlign: 'center',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}>
                Precio: $99.99
              </p>

              
              <p style={{
                margin: '10px 0', 
                fontSize: '16px', 
                color: '#333', 
                fontFamily: 'Arial, sans-serif', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center'
              }}>
                Cantidad: 
                <input 
                  type="number" 
                  min="1" 
                  defaultValue="1" 
                  style={{ 
                    width: '50px', 
                    padding: '5px', 
                    fontSize: '14px', 
                    borderRadius: '5px', 
                    border: '1px solid #ccc',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                  }} 
                />
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button
                  style={{
                    backgroundColor: '#28a745', 
                    color: 'white',
                    border: 'none',
                    padding: '12px 18px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    borderRadius: '5px',
                    transition: 'background-color 0.3s ease',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                  onClick={() => alert('Comprar ahora!')}
                >
                  Comprar ahora
                </button>
                <button
                  style={{
                    backgroundColor: '#007bff', 
                    color: 'white',
                    border: 'none',
                    padding: '12px 18px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    borderRadius: '5px',
                    transition: 'background-color 0.3s ease',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                  onClick={() => alert('Producto agregado al carrito')}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Carousel />
          </div>
        </div>
      </div>
    </>
  );
}
