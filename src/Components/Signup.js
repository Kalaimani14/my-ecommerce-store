import { Link } from "react-router-dom";
import "../Style/signup.css";

export default function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>Sign Up</h1>
        <p className="signup-subtitle">Create a new account to get started!</p>

        <form className="signup-form">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your full name" required />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Password</label>
          <input type="password" placeholder="Create a password" required />

          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm your password" required />

          <button type="submit">Sign Up</button>
        </form>

        <p className="login-text">
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </div>
  );
}
