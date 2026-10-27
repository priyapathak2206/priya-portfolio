
import { useState } from "react";
import { login, register } from "../api";
import "./AuthForm.css";

function AuthForm({ onLogin }) {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      if (isRegister) {
        await register(email, password);
      }
      await login(email, password);
      onLogin();
    } catch (err) {
      // Preserve existing error handling; show message if available
      setError(err?.message || "Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsRegister(!isRegister);
    setError("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="auth-background">
      <div className="auth-card">
        <h2 className="auth-heading">
          {isRegister ? "Create your account" : "Welcome back"}
        </h2>
        <p className="auth-subtitle">
          {isRegister
            ? "Sign up to manage your tasks and stay organized."
            : "Sign in to continue managing your tasks."}
        </p>
        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="auth-email" className="form-label">
              Email address
            </label>
            <input
              id="auth-email"
              type="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="auth-password" className="form-label">
              Password
            </label>
            <input
              id="auth-password"
              type="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              autoComplete={isRegister ? "new-password" : "current-password"}
            />
          </div>
          {error && (
            <div className="error-message" role="alert">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="primary-button"
            disabled={loading}
          >
            {loading ? "Please wait..." : isRegister ? "Create account" : "Sign in"}
          </button>
        </form>
        <p className="toggle-text">
          {isRegister ? "Already have an account?" : "New user?"}
          <button type="button" className="toggle-link" onClick={toggleMode}>
            {isRegister ? "Sign in" : "Create account"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default AuthForm;
