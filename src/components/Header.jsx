import { NavLink } from "react-router-dom";

const Header = () => (
  <header className=" bg-dark text-light py-3">
    <div className="container">
    <h1 className=" display-2">AmazeCart</h1>
    <div>
      <nav>
        <ul className="nav">
       <li className="nav-item">
       <NavLink to="/" className="nav-link">Home</NavLink>
       </li>
          <li className="nav-item">
           <NavLink to="/products" className="nav-link">Products</NavLink>
           </li>
          <li className="nav-item">
           <NavLink to="/about" className="nav-link">About</NavLink>
           </li>
        </ul>
      </nav>
    </div>
      </div>
  </header>
);

export default Header;
