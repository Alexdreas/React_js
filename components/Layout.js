import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Import the CartContext
import "./Layout.css"

const Layout = ({ children }) => {
  const { cart } = useCart(); // Access the cart state

  return (
    <div>
      {/* <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li>
              <Link to="/cart">Cart 
                {cart.length > 0 && (
                  <span style={{marginLeft:"5px"}} className="badge bg-primary ms-1 ">{cart.length}</span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </header> */}
      <header id="header" style={{zIndex:100}} className="site-header header-scrolled position-fixed text-black bg-light">
    <nav id="header-nav" className="navbar navbar-expand-lg px-3 mb-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="index.html">
          <img src="images/main-logo.png" className="logo" />
        </a>
        <button className="navbar-toggler d-flex d-lg-none order-3 p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <svg className="navbar-icon">
            <use xlinkHref="#navbar-icon" />
          </svg>
        </button>
        <div className="offcanvas offcanvas-end" tabIndex={-1} id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel">
          <div className="offcanvas-header px-4 pb-0">
            <a className="navbar-brand" href="index.html">
              <img src="images/main-logo.png" className="logo" />
            </a>
            <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-target="#bdNavbar" />
          </div>
          <div className="offcanvas-body">
            <ul id="navbar" className="navbar-nav text-uppercase justify-content-end align-items-center flex-grow-1 pe-3">
            <li><Link style={{color:"black", textDecoration:"none"}} to="/">Home</Link></li>
              <li className="nav-item">
                <a className="nav-link me-4" href="#company-services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-4" href="#mobile-products">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-4" href="#smart-watches">Watches</a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-4" href="#yearly-sale">Sale</a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-4" href="#latest-blog">Blog</a>
              </li>
              <li className="nav-item">
                <div className="user-items ps-5">
                  <ul className="d-flex justify-content-end list-unstyled">
                    <li className="search-item pe-3">
                      <a href="#" className="search-button">
                        <svg className="search">
                          <use xlinkHref="#search" />
                        </svg>
                      </a>
                    </li>
                    <li className="pe-3">
                      <a href="#">
                        <svg className="user">
                          <use xlinkHref="#user" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      {/* <a href="cart.html">
                        <svg className="cart">
                          <use xlinkHref="#cart" />
                        </svg>
                      </a> */}
                      <Link style={{color:"black"}} to="/cart"> <svg className="cart">
                          <use xlinkHref="#cart" />
                        </svg> 
                {cart.length > 0 && (
                  <span style={{marginLeft:"5px"}} className="badge bg-primary ms-1 ">{cart.length}</span>
                )}
              </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
      <main>{children}</main>
      <footer className="footer">
      <p>© 2024 My Store | <a href="#">Privacy Policy Singor</a></p>
    </footer>
    </div>
  );
};

export default Layout;