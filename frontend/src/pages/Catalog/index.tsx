import './styles.css';
import ProductCard from 'components/ProductCard';
import ButtonIconBuscar from 'components/ButtonIconBuscar';
import { Link } from 'react-router-dom';

const Catalog = () => {
  return (
    <div className="catalog-busca">
      <div className="card-sup-busca">
        <div className="card-busca">
          <div className="blank">
            <p>Digite sua busca</p>
          </div>
          <div>
            <Link to="/buscar">
              <ButtonIconBuscar />
            </Link>
          </div>
        </div>
      </div>
      
        <div className="row my-4">
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
        </div>
    </div>
  );
};
export default Catalog;
