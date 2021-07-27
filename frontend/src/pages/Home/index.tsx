import HomeImg from 'assets/images/main-image.png';
import ButtonIcon from 'components/ButtonIcon';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card">
        <div className="home-image-container">
          <div>
            <img src={HomeImg} alt="Nome do Produto" />
          </div>
          <div>
            <h1>O carro perfeito para você</h1>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho.
            </p>
          </div>
        </div>
      </div>
      <div className="home-card-inf">
        <div className="home-content-container">
          <Link to="/products">
            <ButtonIcon />
          </Link>
          <p>Comece agora a navegar</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
