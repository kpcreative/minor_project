import React from 'react';
import './SpecialitiesList.css';

const SpecialitiesList = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {/* Individual Card Component */}
      <div className="card m-2">
        <a href="#" className="card-link">
          <div className="card-img-container">
            <img src="https://www.practostatic.com/consult/consult-home/symptoms_icon/irregular-painful+period.png" className="card-img-top" alt="Period doubts or Pregnancy" />
          </div>
          <div className="card-body text-center">
            <h5 className="card-title">Period doubts or Pregnancy</h5>
            <button className="btn btn-link text-uppercase">Consult Now</button>
          </div>
        </a>
      </div>
      {/* Repeat similar structure for each specialty card */}
      {/* Add more cards as needed */}
    </div>
  );
};

export default SpecialitiesList;
