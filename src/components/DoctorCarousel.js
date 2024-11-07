import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './DoctorCarousel.css';

// Custom Next Arrow
// Custom Next Arrow
const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
        style={{
          right: '10px',
        }}
      />
    );
  };
  
  // Custom Previous Arrow
  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
        style={{
          left: '10px',
        }}
      />
    );
  };
  

const specialties = [
  { title: "Dentist", description: "Teething troubles? Schedule a dental checkup with best ones", imgSrc: "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg" },
  { title: "Gynecologist/Obstetrician", description: "Explore for women’s health, pregnancy and infertility treatments ", imgSrc: "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gynecologist@2x.jpg" },
  { title: "Dietitian/Nutrition", description: "Get guidance on eating right, weight management and sports nutrition  ", imgSrc: "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dietitian@2x.jpg" },
  { title: "Physiotherapist", description: "Pulled a muscle? Get it treated by a trained physiotherapist", imgSrc: "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-physiotherapist@2x.jpg" },
  { title: "General Surgeon", description: "Need to get operated? Find the right surgeon at right place", imgSrc: "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-general-surgeon@2x.jpg" },
];

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="carousel-container">
      <h2>Book an appointment for an in-clinic consultation</h2>
      <p>Find experienced doctors across all specialties</p>
      <Slider {...settings}>
        {specialties.map((specialty, index) => (
          <div key={index} className="card">
            <a href="#">
              <img src={specialty.imgSrc} alt={specialty.title} className="card-image" />
            </a>
            <div className="card-content">
              <h3 className="card-title">{specialty.title}</h3>
              <p className="card-description">{specialty.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
