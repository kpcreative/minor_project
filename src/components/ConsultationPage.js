import React from 'react';
import { Card, Button, Container, Carousel, Row, Col } from 'react-bootstrap';
import './ConsultationPage.css';

const ConsultationPage = () => {
  return (
    <Container className="consultation-page mt-5">
      {/* Doctor Specialties Section */}
      <h2>Book an appointment for an in-clinic consultation</h2>
      <p>Find experienced doctors across all specialties</p>
      <Carousel indicators={false} className="specialties-carousel mb-5">
        <Carousel.Item>
          <Row>
            {[
              { name: 'Dentist', description: 'Teething troubles? Schedule a dental checkup', image: 'dentist.jpg' },
              { name: 'Gynecologist/Obstetrician', description: 'Explore for women’s health, pregnancy and infertility treatments', image: 'gynecologist.jpg' },
              { name: 'Dietitian/Nutrition', description: 'Get guidance on eating right, weight management and sports nutrition', image: 'nutrition.jpg' },
              { name: 'Physiotherapist', description: 'Pulled a muscle? Get it treated by a trained physiotherapist', image: 'physiotherapist.jpg' },
            ].map((specialty, index) => (
              <Col key={index} sm={6} md={3} className="mb-4">
                <Card className="specialty-card">
                  <Card.Img variant="top" src={`/images/${specialty.image}`} />
                  <Card.Body>
                    <Card.Title>{specialty.name}</Card.Title>
                    <Card.Text>{specialty.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        {/* You can add more Carousel.Items here for additional specialties if necessary */}
      </Carousel>

      {/* Health Articles Section */}
      <h3>Read top articles from health experts</h3>
      <p>Health articles that keep you informed about good health practices and achieve your goals.</p>
      <Button variant="info" className="mb-4">See all articles</Button>
      <Carousel indicators={false} className="articles-carousel">
        <Carousel.Item>
          <Row>
            {[
              { category: 'Coronavirus', title: '12 Coronavirus Myths and Facts That You Should Be Aware Of', author: 'Dr. Diana Borgio', image: 'coronavirus.jpg' },
              { category: 'Vitamins and Supplements', title: 'Eating Right to Build Immunity Against Cold and Viral Infections', author: 'Dr. Diana Borgio', image: 'vitamins.jpg' },
            ].map((article, index) => (
              <Col key={index} sm={6} md={4} className="mb-4">
                <Card className="article-card">
                  <Card.Img variant="top" src={`/images/${article.image}`} />
                  <Card.Body>
                    <h6 className="text-info">{article.category}</h6>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text>{article.author}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        {/* Add more Carousel.Items for additional articles if needed */}
      </Carousel>
    </Container>
  );
};

export default ConsultationPage;
