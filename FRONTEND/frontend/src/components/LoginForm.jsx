import React, { useState } from 'react';

function LoginForm({ onLogin }) {
  const [identifier, setIdentifier] = useState(''); // email or phone
  const [password, setPassword] = useState('');
  const [isEmail, setIsEmail] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call your backend login API here
    onLogin({ identifier, password, isEmail });
  };

  return (
    <div className="login-container">
      <h1>Uzima Pal</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="input-group">
          <label>
            <input
              type="radio"
              name="loginType"
              checked={isEmail}
              onChange={() => setIsEmail(true)}
            />
            Email
          </label>
          <label>
            <input
              type="radio"
              name="loginType"
              checked={!isEmail}
              onChange={() => setIsEmail(false)}
            />
            Phone Number
          </label>
        </div>
        <input
          type={isEmail ? "email" : "tel"}
          placeholder={isEmail ? "Enter your email" : "Enter your phone number"}
          value={identifier}
          onChange={e => setIdentifier(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
        <p>Don't have an account? <a href="/register">Sign Up</a></p>
      </form>
    </div>
  );
}

export default LoginForm;
