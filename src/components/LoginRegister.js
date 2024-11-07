import React, { useState } from 'react';
import './LoginRegister.css';

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div
      className="login-register-container"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/jio.webp'})` }}
    >
      <div className="form-container">
        <div className="header">
          <button className={isLogin ? 'active' : ''} onClick={() => setIsLogin(true)}>Login</button>
          <button className={!isLogin ? 'active' : ''} onClick={() => setIsLogin(false)}>Register</button>
        </div>
        
        {isLogin ? (
          <form className="login-form">
            <input type="text" placeholder="Mobile Number / Email ID" />
            <input type="password" placeholder="Password" />
            <label>
              <input type="checkbox" /> Remember me for 30 days
            </label>
            <label>
              <input type="checkbox" /> Login with OTP instead of password
            </label>
            <button type="submit" className="submit-button">Login</button>
          </form>
        ) : (
          <form className="register-form">
            <input type="text" placeholder="Full Name" required />
            <input type="text" placeholder="Mobile Number" required />
            <input type="email" placeholder="Email Address" required /> {/* New Email Input */}
            <input type="password" placeholder="Create Password" required />
            <label>
              <input type="checkbox" /> Receive relevant offers and promotional communication from Practo
            </label>
            <p className="registration-info">You will receive a confirmation email after registration.</p>
            <button type="submit" className="submit-button">Register</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginRegister;
