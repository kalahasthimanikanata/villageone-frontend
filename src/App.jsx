import React from "react";
import "./App.css";
import heroImage from "./assets/hero.JPG";


function App() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          🌱 <span>VillageOne</span>
        </div>
        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Contact</li>
          <li className="login-btn">Register/Login</li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="overlay">

          <h1>Welcome to VillageOne</h1>
          <h2>Website for Village Shop</h2>

          <div className="payment-icons">
            <span>UPI</span>
            <span>Card</span>
            <span>Net Banking</span>
          </div>

        </div>
      </section>

      {/* SHOP TYPES */}
      <section className="shops">
        <div className="card">🛒 Grocery Shop</div>
        <div className="card">💡 Electric Shop</div>
        <div className="card">🏪 General Store</div>
        <div className="card">🧰 Hardware Shop</div>
      </section>

      {/* TRUST SECTION */}
      <section className="trust">
        <div className="trust-box">
          <h3>10,000+</h3>
          <p>Village Shops Trust Us</p>
        </div>
        <div className="trust-box">
          <h3>500+</h3>
          <p>Shop Owners</p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how">
        <h2>How it Works</h2>
        <div className="steps">
          <p>1. Register Your Shop</p>
          <p>2. Manage Stock</p>
          <p>3. Generate Invoices</p>
        </div>
      </section>

    </div>
  );
}

export default App;
