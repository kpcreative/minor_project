import React from 'react';
import './ConsultationSection.css';

function ConsultationSection() {
  const consultations = [
    { 
      title: "Period doubts or Pregnancy", 
      buttonText: "CONSULT NOW", 
      imgSrc: "https://www.practostatic.com/consult/consult-home/symptoms_icon/irregular-painful+period.png" 
    },
    { 
      title: "Acne, pimple or skin issues", 
      buttonText: "CONSULT NOW", 
      imgSrc: "https://www.practostatic.com/consult/consult-home/symptoms_icon/Acne.png" 
    },
    { 
      title: "Performance issues in bed", 
      buttonText: "CONSULT NOW", 
      imgSrc: "https://www.practo.com/consult/static/images/top-speciality-sexology.svg" 
    },
    { 
      title: "Why to wait Cold, cough or fever", 
      buttonText: "CONSULT NOW", 
      imgSrc: "https://www.practostatic.com/consult/consult-home/symptoms_icon/coughing.png" 
    },
    { 
      title: "Be fast  late-Child not feeling well", 
      buttonText: "CONSULT NOW", 
      imgSrc: "https://www.practo.com/consult/static/images/top-speciality-pediatric.svg" 
    },
    { 
      title: "Think about Depression or anxiety", 
      buttonText: "CONSULT NOW", 
      imgSrc: "https://www.practostatic.com/acred/search-assets/2/12-mental-wellness.png" 
    }
  ];

  return (
    <div className="consultation-section">
      <h2>Consult top doctors online for any health concern</h2>
      <p>Private online consultations with verified doctors in all specialties</p>
      <div className="consultation-cards">
        {consultations.map((item, index) => (
          <div key={index} className="consultation-card">
            <div className="consultation-icon">
              <img src={item.imgSrc} alt={item.title} className="card-img" />
            </div>
            <h3>{item.title}</h3>
            <button>{item.buttonText}</button>
          </div>
        ))}
      </div>
      <button className="view-specialities">View All Specialities</button>
    </div>
  );
}

export default ConsultationSection;
