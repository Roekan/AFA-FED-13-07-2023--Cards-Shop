import React from 'react'
import { Button, Card } from 'react-bootstrap'


export const MagicCard = ({name, colors, type, image}) => {
  return (
    <>
      <Card style={{ width: '18rem' }}>

        {image
        ? <Card.Img variant="top" src={image} />
        : <Card.Img variant="top" src={'./../../public/images/no-image.jpg'} />
        }

      


      <Card.Body>
        <Card.Title>{name}</Card.Title>
            {
            colors.map((color, i)=>{
                return (
                    <Card.Text key={i} >
                    {color}
                    </Card.Text>
                )
            } )}
        <Card.Text>Type: {type}</Card.Text>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </>


  )
}
