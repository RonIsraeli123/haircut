import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Aboutcard from './AboutCard';
import Man from '../../config/Assets/man.jpeg';
import { HEADER } from '../../config/aboutPage/about';

function About() {
  return (
    <Container fluid className='about-section'>
      <Container>
        <Row style={{ justifyContent: 'center', padding: '10px' }}>
          <Col
            md={7}
            style={{
              justifyContent: 'center',
              paddingTop: '30px',
              paddingBottom: '50px',
            }}
          >
            <h1 style={{ fontSize: '2.1em', paddingBottom: '20px' }}>
              <strong className='purple'>{HEADER}</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={5} style={{ paddingBottom: '50px' }} className='about-img'>
            <img src={Man} alt='about' className='image-style' />
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </Container>
  );
}

export default About;
