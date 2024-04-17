import { useState } from "react";
import toast from "react-hot-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSubscribe = () => {
    // Email validation regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return; // Do not proceed with subscription if email is invalid
    }

    // Proceed with subscription logic if email is valid
    toast.success("Email sent successfully");
    setEmail("");
  };

  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>MY E-PLAN</h1>
          <p>Events and Weddings</p>
        </div>
        <div className="tag">
          <label>News Letter</label>
          <div>
            <input type="email" value={email} onChange={handleChange} placeholder="E-mail" />
            <button onClick={handleSubscribe}>Subscribe</button>
          </div>
          <p>Sign up with your email address to receive news and updates!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
