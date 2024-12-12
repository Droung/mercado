'use client';
import { useState } from 'react';
import '../css/bubble.css';
import '../css/createarticulo.css';
import alertify from 'alertifyjs';

export default function Profile() {
  const [nombreProducto, setNombreProducto] = useState('');
  const [costoProducto, setCostoProducto] = useState('');
  const [cantidadProducto, setCantidadProducto] = useState('');
  const [categoriaProducto, setCategoriaProducto] = useState('Figura');
  const [descripcionProducto, setDescripcionProducto] = useState('');
  const [imagenProducto, setImagenProducto] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImagenProducto(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!imagenProducto) {
      alertify.error('Por favor, selecciona una imagen');
      return;
    }
  
    const formData = new FormData();
    formData.append('nombreProducto', nombreProducto);
    formData.append('costoProducto', costoProducto);
    formData.append('cantidadProducto', cantidadProducto);
    formData.append('categoriaProducto', categoriaProducto);
    formData.append('descripcionProducto', descripcionProducto);
    formData.append('imagenProducto', imagenProducto);
  
    try {
      const response = await fetch('http://localhost:5000/api/articles/create', {
        method: 'POST',
        body: formData,
      });
  
      const contentType = response.headers.get('content-type');
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error:', errorText);
        alertify.error(`Error: ${errorText}`);
        return;
      }
  
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        alertify.success('Artículo creado con éxito');
        console.log(data);
      } else {
        const errorText = await response.text();
        console.error('Error inesperado:', errorText);
        alertify.error('Respuesta inesperada del servidor');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      alertify.error('Error en la solicitud');
    }
  };
  

  return (
    <>
      <br />
      <div id='main-container-address'>
        <form onSubmit={handleSubmit}>
          <div className='product-container'>
            <div>
              <label htmlFor="nombreProducto">Nombre del producto:</label><br />
              <input
                placeholder='Ej. Camiseta Roja'
                className='inputTextProduct'
                type="text"
                id="nombreProducto"
                value={nombreProducto}
                onChange={(e) => setNombreProducto(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="costoProducto">Costo del producto:</label><br />
              <input
                placeholder='Ej. 250'
                className='inputTextProduct'
                type="number"
                id="costoProducto"
                value={costoProducto}
                onChange={(e) => setCostoProducto(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="cantidadProducto">Cantidad del producto:</label><br />
              <input
                placeholder='Ej. 10'
                className='inputTextProduct'
                type="number"
                id="cantidadProducto"
                value={cantidadProducto}
                onChange={(e) => setCantidadProducto(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="categoriaProducto">Categoría:</label><br />
              <select
                className='inputTextProduct'
                id="categoriaProducto"
                value={categoriaProducto}
                onChange={(e) => setCategoriaProducto(e.target.value)}
                required
              >
                <option value="Figuras">Figuras</option>
                <option value="Llaveros">Llaveros</option>
                <option value="Peluches">Peluches</option>
                <option value="Otros">Otros</option>
              </select>
            </div>

            <div>
              <label htmlFor="descripcionProducto">Descripción:</label><br />
              <textarea
                placeholder='Descripción del producto'
                className='inputTextProduct'
                id="descripcionProducto"
                value={descripcionProducto}
                onChange={(e) => setDescripcionProducto(e.target.value)}
                rows={3}
                required
              />
            </div>

            <div>
              <label htmlFor="imagenProducto">Subir imagen:</label><br />
              <input
                type="file"
                id="imagenProducto"
                onChange={handleImageChange}
                accept="image/*"
                required
              />
            </div>

            <div className='buttonDistribution'>
              <button className='continuar' type="submit">Guardar</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
