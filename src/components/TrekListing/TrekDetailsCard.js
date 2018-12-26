import React from 'react'
import {Container, Card, CardBody, CardTitle, CardText, Button} from 'mdbreact'
import { Link } from 'react-router-dom'

const TrekDetailsCard = (props) => {
    return (
        <Container>
            <Card className="text-center z-depth-2" style={{marginBottom:"20px", border: "1px solid #ccc"}}>
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Link to={`/eventDetail/${props.id}`}><Button color="primary" >Register</Button></Link>
                </CardBody>
            </Card>
        </Container>
    )
}

export default TrekDetailsCard;