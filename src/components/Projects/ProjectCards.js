import React from 'react';
import Card from 'react-bootstrap/Card';

function ProjectCards(props) {
  return (
    <Card className='project-card-view'>
      <Card.Img variant='top' src={props.imgPath} alt='card-img' />
      <Card.Body>
        <Card.Title style={{ fontWeight: 'bold' }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: 'justify' }}>
          {props.description}
        </Card.Text>
        <Card.Footer>{props.price}</Card.Footer>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
