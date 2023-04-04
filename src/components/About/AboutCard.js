import React from 'react';
import Card from 'react-bootstrap/Card';

import { PARAGRAPH } from '../../config/aboutPage/about';

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p className='aboutContent'>{PARAGRAPH}</p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
