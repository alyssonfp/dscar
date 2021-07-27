import './styles.css';
import Productimg from 'assets/images/product.png';
import ButtonIconCatalog from 'components/ButtonIconCatalog';
import { Link } from 'react-router-dom';

const ProductCard = () => {
  return (
  
      <div className="card-top-container">
        <img src={Productimg} alt="Audi Supra TT" />
        <h6>Audi Supra TT</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>
        <Link to="/purchase">
          <ButtonIconCatalog />
        </Link>
      </div>

  );
};
export default ProductCard;
