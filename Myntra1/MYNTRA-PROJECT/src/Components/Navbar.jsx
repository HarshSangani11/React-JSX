import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch, FaUser, FaHeart, FaShoppingBag } from "react-icons/fa";
import Logo from "../assets/logo.png";

export default function Navbar() {
  const navLinks = [
    { id: 1, label: "Men", to: "/" },
    { id: 2, label: "Women", to: "/" },
    { id: 3, label: "Kids", to: "/" },
    { id: 4, label: "Home & Living", to: "/" },
    { id: 5, label: "Beauty", to: "/" },
    { id: 6, label: "Studio", to: "/", new: true },
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top shadow-sm py-3">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Logo" style={{ height: "40px" }} />
        </Link>


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto">
            {navLinks.map((navItem) => (
              <li className="nav-item" key={navItem.id}>
                <Link
                  className="nav-link text-uppercase fw-bold text-dark mx-3"
                  to={navItem.to}
                >
                  {navItem.label}
                  {navItem.new && (
                    <span className="text-danger fw-bold small ms-1">NEW</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="d-none d-lg-flex align-items-center">
            <div className="input-group">
              <span className="input-group-text bg-light border-0">
                <FaSearch />
              </span>
              <input
                type="text"
                className="form-control border-0 bg-light"
                placeholder="Search for products, brands and more"
              />
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center gap-4">
          <Link
            to="/profile"
            className="text-dark text-decoration-none text-center"
          >
            <FaUser size={20} />
            <div className="small">Profile</div>
          </Link>
          <Link
            to="/wishlist"
            className="text-dark text-decoration-none text-center"
          >
            <FaHeart size={20} />
            <div className="small">Wishlist</div>
          </Link>
          <Link
            to="/bag"
            className="text-dark text-decoration-none text-center"
          >
            <FaShoppingBag size={20} />
            <div className="small">Bag</div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
