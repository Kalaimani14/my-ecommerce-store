import "../Style/login.css";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <p className="login-subtitle">Welcome back! Please log in to your account.</p>

        <form className="login-form">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />

          <button type="submit">Log In</button>
        </form>

        <p className="signup-text">
          Don’t have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
}
