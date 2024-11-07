import React from 'react';
import './MainCards.css';

function MainCards() {
  const cards = [
    {
      title: "Instant Video Consultation",
      description: "Connect within 60 secs",
      image: "/images/cons.jpg",
    },
    {
      title: "Find Doctors Near You",
      description: "Confirmed appointments",
      image: "/images/doc.jpg",
    },
    {
      title: "Surgeries",
      description: "Safe and trusted surgery centers Safe and trusted surgery centers",
      image: "/images/surg.jpg",
    },
    {
      title: "Surgeries",
      description: "Safe and trusted surgery centers Safe and trusted surgery centers",
      image: "/images/surg.jpg",
    }
  ];

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        {cards.map((card, index) => (
          <div key={index} className="col-md-3"> {/* Changed to col-md-3 */}
            <div className="card card-our-offerings">
              <a href="#" aria-label={card.title} className="card-link"></a>
              <div className="img-wrapper" style={{ background: '#AFCFED', padding: '12px 35px 0' }}>
                <a href="#" tabIndex="-1">
                  <img src={card.image} alt={card.title} className="card_img" />
                </a>
              </div>
              <div className="info">
                <div className="row-1">{card.title}</div>
                <div className="row-2">{card.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainCards;
