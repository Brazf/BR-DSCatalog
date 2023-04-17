import ProductPrice from 'components/ProductPrice';
import './styles.css';
import ProductImg from 'assets/images/product.png';

const ProductCard = () => {
  return (
    <div className='base-card product-card'>
      <div className='card-top-container'>
        <img src={ProductImg} alt="Computador" />
      </div>
      <div className='card-bottom-container'>
        <h6>Nove do Produto</h6>
        <ProductPrice />
      </div>
    </div>
  );
};

export default ProductCard;
