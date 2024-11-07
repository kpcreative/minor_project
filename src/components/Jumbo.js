import React from 'react';
import './Jumbo.css'; // Import your custom styles here

const Jumbo = () => {
  return (
    <div className="c-jumbo">
      <div className="c-jumbo__banner">
        <div className="c-jumbo__header_container">
          <h1 data-qa-id="jumbo-heading" className="c-jumbo__header">Your home for health</h1>
        </div>
        <div data-qa-id="jumbo-sub-heading" className="u-t-center u-t-white u-t-bold c-jumbo__subheading">
          Find and Book
        </div>
        <div className="c-jumbo__omni_container">
          <div className="c-omni-wrapper">
            <div id="c-omni-container" className="c-omni-container--desktop">
              <div className="c-omni u-clearfix" style={{ position: 'relative', top: '-2px' }}>
                <div className="c-omni__wrapper u-clearfix c-omni__wrapper--locality">
                  <div className="c-omni-searchbox_wrapper">
                    <span className="c-omni-searchbox__icon"><i className="icon-ic_location"></i></span>
                    <input
                      data-qa-id="omni-searchbox-locality"
                      data-input-box-id="omni-searchbox-locality"
                      className="c-omni-searchbox c-omni-searchbox--large"
                      autoComplete="off"
                      placeholder="Search location"
                      value="Bangalore"
                    />
                  </div>
                </div>
                <div className="c-omni__wrapper u-clearfix c-omni__wrapper--keyword">
                  <div className="c-omni-searchbox_wrapper">
                    <span className="c-omni-searchbox__icon"><i className="icon-ic_search"></i></span>
                    <input
                      data-qa-id="omni-searchbox-keyword"
                      data-input-box-id="omni-searchbox-keyword"
                      className="c-omni-searchbox c-omni-searchbox--large"
                      autoComplete="off"
                      placeholder="Search doctors, clinics, hospitals, etc."
                      value=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="c-popular-searches">
            <span data-qa-id="popular-searches">Popular searches:</span>
            <a data-qa-id="popular-search-item" href="/bangalore/dermatologist" className="c-popular-searches__item">Dermatologist</a>
            <a data-qa-id="popular-search-item" href="/bangalore/pediatrician" className="c-popular-searches__item">Pediatrician</a>
            <a data-qa-id="popular-search-item" href="/bangalore/gynecologist-obstetrician" className="c-popular-searches__item">Gynecologist/Obstetrician</a>
            <div className="u-d-inline">
              <span className="c-popular-searches">
                <span data-qa-id="others-speciality" className="c-popular-searches__item">Others</span>
                <i className="icon-ic_down_cheveron"></i>
              </span>
            </div>
          </div>
        </div>
       
      </div>
      <div className="c-icon-list">
        <div className="c-icon-list__list_wrapper">
          <a data-qa-id="consult-icon" target="_blank" className="c-icon" href="/consult?product=fabric&attribution=Home_Banner_Footer">
            <i className="tab-icon c-icon__img icon-ic_chat"></i>
            <span>Consult with a doctor</span>
          </a>
          <a data-qa-id="order-icon" target="_blank" className="c-icon" href="/order?utm_source=practo_home">
            <i className="tab-icon c-icon__img icon-ic_cart"></i>
            <span>Order Medicines</span>
          </a>
          <a data-qa-id="drive-icon" target="_blank" className="c-icon" href="https://drive.practo.com?utm_source=practo_home">
            <i className="tab-icon c-icon__img icon-ic_records_3"></i>
            <span>View medical records</span>
          </a>
          <a data-qa-id="lab-icon" target="_blank" className="c-icon" href="/tests?utm_source=practo_home">
            <div className="tab-offer">
              <i className="tab-icon c-icon__img icon-ic_lab_home"></i>
              <span className="c-offer-tag u-round-corner u-border-white u-t-bold u-t-white">New</span>
            </div>
            <span>Book test</span>
          </a>
          <a data-qa-id="healthfeed-icon" target="_blank" className="c-icon" href="/healthfeed?utm_source=practo_home">
            <i className="tab-icon c-icon__img icon-ic_read"></i>
            <span>Read articles</span>
          </a>
          <a data-qa-id="providers-icon" target="_blank" className="c-icon" href="/providers?utm_source=practo_home">
            <i className="tab-icon c-icon__img icon-ic_briefcase"></i>
            <span>For healthcare providers</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Jumbo;
