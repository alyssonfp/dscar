import './styles.css';
import 'bootstrap/js/src/collapse.js'
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-primary main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h4>Carros Top</h4>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dscar-navbar"
          aria-controls="dscar-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="dscar-navbar">
          <ul className="navbar-nav offset-md-6 main-menu">
            <li>
              <NavLink to="/" activeClassName="active" exact>Home</NavLink>
            </li>
            <li>
            <NavLink to="/products" activeClassName="active">Catálogo</NavLink>
            </li>           
          </ul>
        </div>
      </div>
    </nav>

       
  );
};
export default Navbar;
