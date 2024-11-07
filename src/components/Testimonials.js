import React from 'react';
import Slider from 'react-slick';
import './Testimonials.css'; // Import your CSS styles
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing arrow icons from react-icons

const testimonials = [
    {
        id: 1,
        text: "Very good app. Well thought out about booking/rescheduling/canceling an appointment. Also, Doctor's feedback mechanism is good and describes all the basics in a good way.",
        name: "Avinash Kumar"
    },
    {
        id: 2,
        text: "Very helpful. Far easier than doing same things on computer. Allows quick and easy search with speedy booking. Even maintains history of doctors visited.",
        name: "Amit Sharma"
    },
    {
        id: 3,
        text: "Very easy to book, maintain history. Hassle-free from older versions of booking appointment via telephone. Thanks Practo for making it simple.",
        name: "Jyothi Bhatia"
    },
    // Add more testimonials as needed
];

// Custom Arrow Component
const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="custom-arrow prev-arrow" onClick={onClick}>
            <FaChevronLeft />
        </div>
    );
};

const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="custom-arrow next-arrow" onClick={onClick}>
            <FaChevronRight />
        </div>
    );
};

const Testimonials = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true, // Enable arrows to use custom ones
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
    };

    return (
        <div className="s-slider">
            <div className="s-slider__content">
                <h3 className="u-margin--0 u-font--bold u-margin--30__bottom u-font--30">What our users have to say</h3>
                <Slider {...settings}>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="card-testimonial">
                            <div className="testimony">{testimonial.text}</div>
                            <div className="u-margin--30__top">
                                <i className="icon-ic_user_system user-icon"></i>
                                <div className="u-d__inline-block u-t-left u-v-middle u-margin--10__left">
                                    <div className="user-name">{testimonial.name}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Testimonials;
