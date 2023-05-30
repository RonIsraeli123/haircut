import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import BarberCard from './BarberCard';

import {
  AVAILABLE_BARBERS,
  BARBERS_HEADER,
} from '../../../../../config/Pages/appointmentPage/appointment';

const BarbersOption = (props) => {
  return (
    <Container>
      <h1 className='project-heading'>{BARBERS_HEADER}</h1>
      <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
        {AVAILABLE_BARBERS.map((barberDetails, index) => (
          <Col md={4} className='barber-card' key={index}>
            <BarberCard
              key={index}
              barberName={barberDetails['barberName']}
              barberAvailability={barberDetails['barberAvailability']}
              barberDescription={barberDetails['barberDescription']}
              barberImage={barberDetails['barberImage']}
              showAvailableTime={props.showAvailableTime}
              setShowAvailableTime={props.setShowAvailableTime}
              setChosenBarberDetails={props.setChosenBarberDetails}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default BarbersOption;
