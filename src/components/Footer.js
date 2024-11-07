import React from 'react';
import './Footer.css'; // Import the CSS for styling

const Footer = () => {
  return (
    <footer className="c-footer">
      <div className="c-footer__wrapper">
        <div className="c-footer__content">
          <div className="c-footer__column">
            <div data-qa-id="footer-heading" className="c-footer__title"><span>Practo</span></div>
            <div>
              <a data-qa-id="footer-item" target="_blank" className="c-footer__item" href="/company/about" rel=""><span>About</span></a>
              <a data-qa-id="footer-item" target="_blank" className="c-footer__item" href="//blog.practo.com" rel=""><span>Blog</span></a>
              <a data-qa-id="footer-item" target="_blank" className="c-footer__item" href="/company/careers" rel=""><span>Careers</span></a>
              <a data-qa-id="footer-item" target="_blank" className="c-footer__item" href="/company/press" rel=""><span>Press</span></a>
              <a data-qa-id="footer-item" target="_blank" className="c-footer__item" href="/company/contact" rel=""><span>Contact Us</span></a>
            </div>
          </div>

          <div className="c-footer__column">
            <div data-qa-id="footer-heading" className="c-footer__title"><span>For patients</span></div>
            <div>
              <a data-qa-id="footer-item" target="_self" className="c-footer__item" href="/delhi/doctors" rel=""><span>Search for doctors</span></a>
              <a data-qa-id="footer-item" target="_self" className="c-footer__item" href="/delhi/clinics" rel=""><span>Search for clinics</span></a>
              <a data-qa-id="footer-item" target="_self" className="c-footer__item" href="/delhi/hospitals" rel=""><span>Search for hospitals</span></a>
              <a data-qa-id="footer-item" target="_self" className="c-footer__item" href="/plus?utm_source=consumer_home&amp;utm_medium=web" rel=""><span>Practo Plus</span></a>
              <a data-qa-id="footer-item" target="_self" className="c-footer__item" href="/india/covid-hospital-listing" rel=""><span>Covid Hospital listing</span></a>
              <a data-qa-id="footer-item" target="_self" className="c-footer__item" href="https://www.practocareclinic.com/" rel=""><span>Practo Care Clinics</span></a>
              <a data-qa-id="footer-item" target="_blank" className="c-footer__item" href="/healthfeed" rel=""><span>Read health articles</span></a>
              <a data-qa-id="footer-item" target="_blank" className="c-footer__item" href="/medicine-info" rel=""><span>Read about medicines</span></a>
              <a data-qa-id="footer-item" target="_blank" className="c-footer__item" href="/drive" rel=""><span>Practo drive</span></a>
              <a data-qa-id="footer-item" target="_blank" className="c-footer__item" href="/health-app" rel=""><span>Health app</span></a>
            </div>
          </div>

          <div className="c-footer__column">
            <div data-qa-id="footer-heading" className="c-footer__title"><span>For doctors</span></div>
            <div>
              <a data-qa-id="footer-item" target="_blank" className="c-footer__item" href="/providers/doctors/profile" rel=""><span>Practo Profile</span></a>
            </div>
            <div data-qa-id="footer-heading" className="c-footer__title"><span>For clinics</span></div>
            <div>
              <a data-qa-id="footer-item" target="_blank" className="c-footer__item" href="/providers/clinics/ray" rel=""><span>Ray by Practo</span></a>
              <a data-qa-id="footer-item" target="_blank" className="c-footer__item" href="/providers/clinics/reach" rel=""><span>Practo Reach</span></a>
              <a data-qa-id="footer-item" target="_blank" className="c-footer__item" href="/providers/clinics/ray/features#rayTab" rel=""><span>Ray Tab</span></a>
              <a data-qa-id="footer-item" target="_blank" className="c-footer__item" href="/practo-pro-app" rel=""><span>Practo Pro</span></a>
            </div>
          </div>

          <div className="c-footer__column">
            <div data-qa-id="footer-heading" className="c-footer__title"><span>For hospitals</span></div>
            <div>
              <a data-qa-id="footer-item" target="_blank" className="c-footer__item" href="/providers/hospitals/insta" rel=""><span>Insta by Practo</span></a>
              <a data-qa-id="footer-item" target="_blank" className="c-footer__item" href="/providers/hospitals/qikwell" rel=""><span>Qikwell by Practo</span></a>
              <a data-qa-id="footer-item" target="_blank" className="c-footer__item" href="/providers/hospitals/profile" rel=""><span>Practo Profile</span></a>
              <a data-qa-id="footer-item" target="_blank" className="c-footer__item" href="/providers/hospitals/reach" rel=""><span>Practo Reach</span></a>
              <a data-qa-id="footer-item" target="_blank" className="c-footer__item" href="https://drive.practo.com" rel=""><span>Practo Drive</span></a>
            </div>
            <div data-qa-id="footer-heading" className="c-footer__title"><span>For Corporates</span></div>
            <div>
              <a data-qa-id="footer-item" target="_blank" className="c-footer__item" href="/plus/corporate" rel=""><span>Wellness Plans</span></a>
            </div>
          </div>

          <div className="c-footer__column">
            <div data-qa-id="footer-heading" className="c-footer__title"><span>More</span></div>
            <div>
              <a data-qa-id="footer-item" target="_blank" className="c-footer__item" href="https://help.practo.com" rel=""><span>Help</span></a>
              <a data-qa-id="footer-item" target="_blank" className="c-footer__item" href="https://developers.practo.com" rel=""><span>Developers</span></a>
              <a data-qa-id="footer-item" target="_blank" className="c-footer__item" href="/company/privacy" rel=""><span>Privacy Policy</span></a>
              <a data-qa-id="footer-item" target="_blank" className="c-footer__item" href="/company/terms" rel=""><span>Terms & Conditions</span></a>
              <a data-qa-id="footer-item" target="_blank" className="c-footer__item" href="https://www.practostatic.com/pcs-assets/PCS_T_Cs.pdf" rel=""><span>PCS T&C</span></a>
              <a data-qa-id="footer-item" target="_blank" className="c-footer__item" href="/sitemap" rel=""><span>Healthcare Directory</span></a>
              <a data-qa-id="footer-item" target="_blank" className="c-footer__item" href="/health-wiki/" rel=""><span>Practo Health Wiki</span></a>
            </div>
          </div>

          <div className="c-footer__column">
            <div data-qa-id="footer-heading" className="c-footer__title"><span>Social</span></div>
            <div>
              <a data-qa-id="footer-item" target="_blank" className="c-footer__item" href="//www.facebook.com/practo" rel="nofollow"><span>Facebook</span></a>
              <a data-qa-id="footer-item" target="_blank" className="c-footer__item" href="//twitter.com/Practo" rel="nofollow"><span>Twitter</span></a>
              <a data-qa-id="footer-item" target="_blank" className="c-footer__item" href="//www.linkedin.com/company/practo-technologies-pvt-ltd" rel="nofollow"><span>LinkedIn</span></a>
              <a data-qa-id="footer-item" target="_blank" className="c-footer__item" href="//www.instagram.com/practo" rel="nofollow"><span>Instagram</span></a>
              <a data-qa-id="footer-item" target="_blank" className="c-footer__item" href="//www.youtube.com/user/PractoHealth" rel="nofollow"><span>YouTube</span></a>
            </div>
          </div>
        </div>

        <div className="c-footer__bottom">
          <div className="c-footer__logo">
            <img src="practo-logo.png" alt="Practo" />
          </div>
          <div className="c-footer__copyright">
            <span>&copy; {new Date().getFullYear()} Practo. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
