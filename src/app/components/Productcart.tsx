import '../css/productcart.css';

interface ProductCardProps {
  id: string; // Adding an ID to the props
  imagen: string;
  nombre_articulo: string;
  costo: number | string;
}

const ProductCard = ({ id, imagen, nombre_articulo, costo }: ProductCardProps) => {
  return (
    <a href={`/producto/${id}`} className="card"> {/* Passing the id in the URL */}
      <img
        src={imagen || '/placeholder.png'} 
        alt={nombre_articulo}
        style={{ width: '100%', height: '150px', objectFit: 'cover' }}
      />
      <div className="nombre_articulo">{nombre_articulo}</div>
      <div className="costo">${parseFloat(costo as string).toFixed(2)}</div>
    </a>
  );
};

export default ProductCard;
