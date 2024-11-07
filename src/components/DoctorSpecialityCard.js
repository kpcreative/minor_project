import React from 'react';
import './DoctorSpecialityCard.css';

const DoctorSpecialityCard = ({ imgSrc, altText, title, link }) => {
  return (
    <div className="card">
      <a href={link} className="card-link">
        <div className="card-img-container">
          <img src={imgSrc} className="card-img-top" alt={altText} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <button className="btn btn-link text-uppercase">Consult Now</button>
        </div>
      </a>
    </div>
  );
};

export default DoctorSpecialityCard; 