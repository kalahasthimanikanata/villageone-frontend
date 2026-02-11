import { useState } from "react";

function Payment() {
  const [amount, setAmount] = useState(100);

  const upiLink = `upi://pay?pa=mani7973@ybl&pn=VillageOne&am=${amount}&cu=INR`;

  return (
    <div className="form-page">
      <div className="form-box">
        <h2>Make Payment</h2>

        <label>Enter Amount (₹)</label>
        <input
          type="number"
          value={amount}
          min="1"
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        <br /><br />

        <a
          href={upiLink}
          className="upi-button"
          style={{
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "#28a745",
            color: "white",
            textDecoration: "none",
            borderRadius: "6px"
          }}
        >
          Pay ₹{amount} via UPI
        </a>

        <p style={{ marginTop: "15px", fontSize: "14px" }}>
          After payment, please send screenshot to WhatsApp: 7731077973
        </p>
      </div>
    </div>
  );
}

export default Payment;
