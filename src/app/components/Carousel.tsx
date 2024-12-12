'use client';

import { useState, useEffect } from 'react';
import ProductCard from './Productcart';

const Carousel = () => {

  const [currentCircleIndex, setCurrentCircleIndex] = useState(0);

  const [products, setProducts] = useState<any[]>([]);


  const groupProducts = (products: any[]) => {
    const groups = [];
    for (let i = 0; i < products.length; i += 5) {
      groups.push(products.slice(i, i + 5));
    }
    return groups;
  };

  const goToCircle = (index: number) => {
    setCurrentCircleIndex(index);
  };

  // Cargar los productos desde el backend al montar el componente
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
  
        if (!response.ok) {
          throw new Error('Error al obtener los productos');
        }
  
        const data = await response.json();
        console.log('Productos recibidos:', data); // Verificar qué datos se reciben
        const limitedProducts = data.slice(0, 15);
        setProducts(limitedProducts);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };
  
    fetchProducts();
  }, []);
  // Agrupar los productos en bloques de 5 para el carrusel
  const productGroups = groupProducts(products);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80%', padding: '0 10px' }}>
      {/* Puntos de navegación entre los círculos */}
      <div
        style={{
          marginBottom: '20px',
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          position: 'relative',
          marginRight: '10px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '0px',
            right: '10px',
            display: 'flex',
            gap: '10px',
          }}
        >
          {productGroups.map((_, index) => (
            <div
              key={index}
              onClick={() => goToCircle(index)}
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: index === currentCircleIndex ? 'blue' : 'gray',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>
      </div>

      {/* Mostrar los productos del círculo actual */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '1500px',
          marginBottom: '0px',
          overflowX: 'auto',
          gap: '5px',
        }}
      >
        {productGroups[currentCircleIndex]?.map((product, index) => (
          <ProductCard
            key={index}
            imagen={product.imagen} // Ajusta esto según el formato de tu respuesta API
            nombre_articulo={product.nombre_articulo} // Ajusta esto según el formato de tu respuesta API
            costo={product.costo} // Ajusta esto según el formato de tu respuesta API
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
