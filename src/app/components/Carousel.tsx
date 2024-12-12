'use client';

import { useState, useEffect } from 'react';
import ProductCard from './Productcart';

const Carousel = () => {

  const [currentCircleIndex, setCurrentCircleIndex] = useState(0);

  const [products, setProducts] = useState<any[]>([]);

  // Group products in batches of 5
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

  // Fetch products from the backend when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');

        if (!response.ok) {
          throw new Error('Error al obtener los productos');
        }

        const data = await response.json();
        console.log('Productos recibidos:', data); // Check what data is received
        const limitedProducts = data.slice(0, 15); // Limit to the first 15 products
        setProducts(limitedProducts);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };

    fetchProducts();
  }, []);

  // Group the products in blocks of 5 for the carousel
  const productGroups = groupProducts(products);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80%', padding: '0 10px' }}>
      {/* Navigation dots for the carousel */}
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

      {/* Show the products of the current circle */}
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
        {productGroups[currentCircleIndex]?.map((product) => (
          <ProductCard
            key={product.id} // Use the product's unique id for the key
            id={product.id} // Pass the product id to ProductCard
            imagen={product.imagen} // Adjust this according to your API response format
            nombre_articulo={product.nombre_articulo} // Adjust according to your API response format
            costo={product.costo} // Adjust according to your API response format
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
