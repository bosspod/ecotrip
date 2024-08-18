import React, { useEffect, useState } from 'react';
import ButtonConnect from '../components/ButtonConnect';
import { Button } from 'antd';
import icon from '../assets/logo.png';
import { Link } from 'react-router-dom';
import '../loginScreen.css';
import '../index.css'
function LoginScreen() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = icon;
  }, []);

  return (
    <section>
      <div className="login-container">
        <div className="content">
          <div className="title2">
            {imageLoaded ? (
              <img src={icon} className='img-logo' alt="logo" />
            ) : (
              <div>Loading...</div>
            )}
            <p className='login-secure'>Connect with your wallet</p>
          </div>
          <div className="pb-5">
            <ButtonConnect onWalletAddressChange={setWalletAddress} />
          </div>
          <div className="pb-5">
            <div className="styled-or">or</div>
          </div>
          <div className="pb-5">
            <Link to="/main">
              <Button
                className='button-text'
                type="primary"
                style={{ backgroundColor: 'white', color: 'green', borderColor: 'green' }}
              >
                Demo Login
              </Button>
            </Link>
          </div>
          <div>
            <p className='login-secure'>Secure Login. Encryption by <b>SHA512</b></p>
            <p className='login-secure'>Better than Standard Blockchain.</p>
          </div>
          {walletAddress && (
            <Link to='/main'>
              <div className="arrow">
                <span>&#8594;</span>
              </div>
            </Link>
          )}
        </div>
      </div>
      <Link to='/'>
        <div className="arrow-back">
          <span>&#8592;</span>
        </div>
      </Link>
    </section>
  );
}

export default LoginScreen;
