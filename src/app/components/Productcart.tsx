import '../css/productcart.css';

interface ProductCardProps {
  imagen: string;
  nombre_articulo: string;
  costo: number | string;
}

const ProductCard = ({ imagen, nombre_articulo, costo }: ProductCardProps) => {
  return (
    <div className="card">
     <img
        src={imagen || '/placeholder.png'} // Usar una imagen de placeholder si no hay imagen
        alt={nombre_articulo}
        style={{ width: '100%', height: '150px', objectFit: 'cover' }}
      />
      <div className="nombre_articulo">{nombre_articulo}</div>
      <div className="costo">${parseFloat(costo as string).toFixed(2)}</div>
    </div>
  );
};

export default ProductCard;
