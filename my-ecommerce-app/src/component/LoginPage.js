// LoginPage.js
import React, { useState } from 'react';
import Header from './Header';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Footer from './Footer';

const LoginPage = () => {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);

  const handleSwitchForm = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
  };

  return (
    <div>
      <Header />
      {isLoginFormVisible ? <LoginForm onSwitchForm={handleSwitchForm} /> : <SignupForm onSwitchForm={handleSwitchForm} />}
      <Footer />
    </div>
  );
};

export default LoginPage;
