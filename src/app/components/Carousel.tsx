// components/Carousel.tsx
'use client';

import { useState } from 'react';
import ProductCard from './Productcart';

const Carousel = () => {
  // Estado para el círculo actual (0, 1, 2)
  const [currentCircleIndex, setCurrentCircleIndex] = useState(0);

  // Productos organizados en 3 círculos, cada uno con 5 productos
  const productGroups = [
    [
      { image: '/img/mha.jpg', description: 'Taquito 1', price: 350 },
      { image: '/img/mha.jpg', description: 'Taquito 2', price: 400 },
      { image: '/img/mha.jpg', description: 'Taquito 3', price: 450 },
      { image: '/img/mha.jpg', description: 'Taquito 4', price: 500 },
      { image: '/img/mha.jpg', description: 'Taquito 5', price: 550 },
      { image: '/img/mha.jpg', description: 'Taquito 5', price: 550 },
      { image: '/img/mha.jpg', description: 'Taquito 5', price: 550 },
    ],
    [
      { image: '/img/mha.jpg', description: 'Taquito 1', price: 350 },
      { image: '/img/mha.jpg', description: 'Taquito 2', price: 400 },
      { image: '/img/mha.jpg', description: 'Taquito 3', price: 450 },
      { image: '/img/mha.jpg', description: 'Taquito 4', price: 500 },
      { image: '/img/mha.jpg', description: 'Taquito 5', price: 550 },
      { image: '/img/mha.jpg', description: 'Taquito 5', price: 550 },
      { image: '/img/mha.jpg', description: 'Taquito 5', price: 550 },
    ],
    [
      { image: '/img/mha.jpg', description: 'Taquito 1', price: 350 },
      { image: '/img/mha.jpg', description: 'Taquito 2', price: 400 },
      { image: '/img/mha.jpg', description: 'Taquito 3', price: 450 },
      { image: '/img/mha.jpg', description: 'Taquito 4', price: 500 },
      { image: '/img/mha.jpg', description: 'Taquito 5', price: 550 },
      { image: '/img/mha.jpg', description: 'Taquito 5', price: 550 },
      { image: '/img/mha.jpg', description: 'Taquito 5', price: 550 },
    ],
  ];

  // Función para navegar a un círculo específico al hacer clic en los puntos
  const goToCircle = (index: number) => {
    setCurrentCircleIndex(index);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80%', padding: '0 10px' }}>
      {/* Puntos de navegación entre los 3 círculos (Arriba a la derecha) */}
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
            right: '10px', // Ubica los puntos a la derecha
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

      {/* Mostrar los 5 productos del círculo actual */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '1500px',
          marginBottom: '0px',
          overflowX: 'auto',
          gap: '5px', // Espacio entre las cartas
        }}
      >
        {productGroups[currentCircleIndex].map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
