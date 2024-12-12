'use client';
import React from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation
import '../css/bubble.css';
import '../css/createarticulo.css';

export default function Profile() {
  const router = useRouter(); // Initialize useRouter from next/navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Crear un FormData con los datos del formulario
    const formData = new FormData(e.target);

    try {
      // Enviar el formulario usando fetch
      const response = await fetch('http://localhost:3001/guardar', {
        method: 'POST',
        body: formData,
      });

      // Si la respuesta es exitosa
      if (response.ok) {
        const data = await response.text();
        console.log(data); // Log de éxito
        router.push('/productos'); // Redirigir a otra página (por ejemplo, /productos)
      } else {
        // Si la respuesta no es exitosa
        console.error('Error al guardar el producto');
        alert('Error al guardar el producto. Intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al enviar el formulario');
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div className="product-container">
        <div>
          <label htmlFor="nombreProducto">Nombre del producto:</label><br />
          <input
            placeholder="Ej. Camiseta Roja"
            className="inputTextProduct"
            type="text"
            id="nombreProducto"
            name="nombreProducto"
            required
          />
        </div>

        <div>
          <label htmlFor="costoProducto">Costo del producto:</label><br />
          <input
            placeholder="Ej. 250"
            className="inputTextProduct"
            type="number"
            id="costoProducto"
            name="costoProducto"
            required
          />
        </div>

        <div>
          <label htmlFor="cantidadProducto">Cantidad del producto:</label><br />
          <input
            placeholder="Ej. 10"
            className="inputTextProduct"
            type="number"
            id="cantidadProducto"
            name="cantidadProducto"
            required
          />
        </div>

        <div>
          <label htmlFor="categoriaProducto">Categoría:</label><br />
          <select className="inputTextProduct" id="categoriaProducto" name="categoriaProducto" required>
            <option value="Figura">Figura</option>
            <option value="Llaveros">Llaveros</option>
            <option value="Peluches">Peluches</option>
            <option value="Otros">Otros</option>
          </select>
        </div>

        <div>
          <label htmlFor="descripcionProducto">Descripción:</label><br />
          <textarea
            placeholder="Descripción del producto"
            className="inputTextProduct"
            id="descripcionProducto"
            name="descripcionProducto"
            rows="3"
            required
          ></textarea>
        </div>

        <div>
          <label htmlFor="urlImagenProducto">URL de la imagen:</label><br />
          <input
            placeholder="Ej. https://miurl.com/imagen.jpg"
            className="inputTextProduct"
            type="text"
            id="urlImagenProducto"
            name="urlImagenProducto"
            required
          />
        </div>

        <div className="buttonDistribution">
          <a href="/vend">
            <button className="continuar" type="button">
              Regresar
            </button>
          </a>

          <button className="continuar" type="submit">
            Guardar
          </button>
        </div>
      </div>
    </form>
  );
}
