import React from 'react';

const DonationBanner = () => (
  <div className="slider-wrap">
    <div id="slider_1" className="owl-carousel owl-theme">
      <div className="item">
        <img src="/images/home_1_slider_1.jpg" alt="img" />
        <div className="slider-content text-center">
          <div className="container">
            <div className="slider-contents-info">
              <h3>Comienza hoy mismo con una rutina!</h3>
              <h2>El primer paso<br />es atreverse</h2>
              <a href="/register" className="btn btn-slider">Registrate ahora! <i className="fa fa-long-arrow-right" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DonationBanner;
