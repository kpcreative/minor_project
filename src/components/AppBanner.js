import React from 'react';
import './AppBanner.css';

const AppBanner = () => {
  return (
    <div className="appbanner-wrapper">
      <div className="s-appbanner">
        <div className="s-appbanner__content">
          <div className="appbanner-image">
            <img
              src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/footer-img.png"
              alt="Download Practo App"
              className="s-appbanner__image"
            />
          </div>
          <div className="appbanner-text">
            <h3 className="appbanner-title">Download the Practo app</h3>
            <p className="appbanner-description">
              Access video consultation with India’s top doctors on the Practo app. Connect with doctors online, available 24/7, from the comfort of your home.
            </p>
            <div className="appbanner-download-text">Get the link to download the app</div>
            <div className="appbanner-input">
              <div className="input-wrapper">
                <div className="country-code">+91</div>
                <input
                  type="tel"
                  className="text-input"
                  placeholder="Enter phone number"
                />
              </div>
              <button type="button" className="btn-send">
                Send SMS
              </button>
            </div>
            <div className="downloads">
              <a href="https://app.appsflyer.com/com.practo.fabric?pid=web&c=homepage">
                <img
                  src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/google_play.png"
                  alt="Get it on Google Play"
                  className="store-icon"
                />
              </a>
              <a href="https://app.appsflyer.com/id953772015?pid=web&c=homepage">
                <img
                  src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/apple_store.png"
                  alt="Download on the App Store"
                  className="store-icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;
