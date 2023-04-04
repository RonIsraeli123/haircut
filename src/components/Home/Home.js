import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../config/Assets/home.jpg';
import SocialMedia from '../General/SocialMedia';
import TypeWriter from './TypeWriter';

import { TITLE, SUMTITLE, PARAGRAPH } from '../../config/homePage/main';

import {
  CONTACT_HEADER,
  CONTACT_PARAGRAPH,
  CONTACT_NOTE,
} from '../../config/homePage/contact';

function Home() {
  return (
    <section>
      <Container fluid className='home-section' id='home'>
        <Container className='home-content'>
          <Row>
            <Col md={6} className='home-header'>
              <h1 style={{ paddingBottom: 15 }} className='heading'>
                {TITLE}{' '}
                <span className='wave' role='img' aria-labelledby='wave'>
                  👋🏻
                </span>
              </h1>

              <h1 className='heading-name'>
                <strong className='main-name'> {SUMTITLE}</strong>
              </h1>

              <p className='heading-description blockquote'>{PARAGRAPH}</p>

              <div className='heading-type'>
                <TypeWriter />
              </div>
            </Col>

            <Col md={5}>
              <img src={myImg} className='profile-pic' alt='avatar' />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className='home-about-section' id='about'>
        <Container>
          <Row>
            <Col md={12} className='home-about-social'>
              <h1>{CONTACT_HEADER}</h1>
              <p> {CONTACT_PARAGRAPH}</p>
              <p>({CONTACT_NOTE})</p>
              <SocialMedia />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
