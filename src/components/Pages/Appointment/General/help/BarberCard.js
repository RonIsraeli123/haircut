import React from 'react';
import Card from 'react-bootstrap/Card';

function BarberCard(props) {
  const {
    barberName,
    barberAvailability,
    barberDescription,
    barberImage,
    setShowAvailableTime,
    setChosenBarberDetails,
  } = props;

  const handleCardClick = () => {
    setShowAvailableTime(true);
    setChosenBarberDetails({
      barberName: barberName,
      barberAvailability: barberAvailability,
    });
  };

  return (
    <div>
      <Card
        className='barber-card-view'
        name={barberName}
        onClick={handleCardClick}
      >
        <Card.Title style={{ fontWeight: 'bold' }}>{barberName}</Card.Title>
        <Card.Img variant='top' src={barberImage} alt='card-img' />
        <Card.Body>
          <Card.Text style={{ textAlign: 'justify' }}>
            {barberDescription}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
export default BarberCard;
