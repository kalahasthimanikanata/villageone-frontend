import { useNavigate } from "react-router-dom";
import { useState } from "react";
import bgImage from "../assets/hero.JPG";



function Home() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const openRazorpay = () => {
    const options = {
      key: "YOUR_RAZORPAY_KEY",
      amount: 10000,
      currency: "INR",
      name: "VillageOne",
      description: "VillageOne Service Payment",
      handler: function (response) {
        alert("Payment Successful: " + response.razorpay_payment_id);
      },
      theme: { color: "#14532d" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo" onClick={() => navigate("/")}>
          🌱 VillageOne
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/contact")}>Contact</li>
        </ul>
      </nav>

      {/* HERO SECTION */}
{/* HERO SECTION */}
<section
  className="hero"
  style={{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="overlay">
    <h1>Welcome to  VillageOne</h1>
    <h2>Website for Your Village Shop</h2>

    <div className="button-group">
      <button onClick={() => navigate("/register")}>Register</button>
      <button onClick={() => navigate("/login")}>Login</button>
    </div>

    <div className="payment-group">
      <button onClick={openRazorpay}>
         Card 
      </button>
      <button onClick={() => navigate("/payment")}>
  UPI/PhonePe/Gpay/Paytm
</button>

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
          <p>Active Shop Owners</p>
        </div>
      </section>

      {/* HOW IT WORKS */}
<section className="how">
  <h2 className="how-title">How It Works</h2>

  <div className="steps">
    <div className="step-card">
      1️⃣ Register Your Shop
    </div>

    <div className="step-card">
      2️⃣ Add Products & Manage Stock
    </div>

    <div className="step-card">
      3️⃣ Generate Bills & Track Sales
    </div>
  </div>
</section>

{/* CONTACT SECTION */}
<section className="contact-section">
  <h2>Connect With Us</h2>

  <div className="social-links">
    <a
      href="https://wa.me/917731077973"
      target="_blank"
      rel="noopener noreferrer"
    >
      WhatsApp
    </a>

    <a
      href="https://instagram.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Instagram
    </a>

    <a
      href="https://youtube.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      YouTube
    </a>

    <a
      href="https://x.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      X
    </a>
  </div>
</section>


    </div>
  );
}

export default Home;
