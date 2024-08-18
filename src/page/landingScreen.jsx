import React from 'react';
import '../index.css';
import '../landing.css'; // Create this CSS file for styles

import { Link } from 'react-router-dom';
import ecopicture from '../assets/ecotrip.png';

function LandingScreen() {
  return (
    <section>
      <div className="container">
        <div className="image-container">
          <img src={ecopicture} width='70%'  alt="Placeholder Image" className="main-image" />
        </div>
        <div className="content">
          <h1>Welcome to EcoTrip!!</h1>
          <div className="buttons">
            <span className="btn">Let's Save The World</span>
            <span className="btn">Together</span>
          </div>
          <p className='left home-detail'>We've put together most popular collection so you can find and enjoy your favourite.</p>
          <div className="dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
        <Link to='/login'>
          <div className="arrow">
            <span>&#8594;</span>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default LandingScreen;
