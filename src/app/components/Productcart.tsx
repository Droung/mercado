import '../css/productcart.css';

interface ProductCardProps {
  image: string;  
  description: string;  
  price: number | string; 
}

const ProductCard = ({ image, description, price }: ProductCardProps) => {
  return (
    <div className='card'>
      <img src={image} alt="Product" className='image' />
      <div className='description'>{description}</div>
      <div className='price'>${price}</div>
    </div>
  );
};

export default ProductCard;
