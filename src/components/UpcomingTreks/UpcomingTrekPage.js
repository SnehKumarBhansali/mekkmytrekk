import React, { Component } from "react";
import {
    Card, CardImage, CardBody, CardTitle, CardText, Button, CardGroup
} from "mdbreact";
import { Link } from 'react-router-dom'
import Data from '../Data'

class UpcomingTrekPage extends Component {

    render() {

        return (
            <div>
                <section className="text-center my-5">
                    <h2 className="h1-responsive font-weight-bold my-5">Upcoming Trekking Events</h2>
                    <CardGroup deck>
                        <Card className="mb-2">
                            <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" />
                            <CardBody>
                                <CardTitle>{Data[0].trekName}</CardTitle>
                                <CardText>{Data[0].trekDescription}</CardText>
                                <CardText>Trek starting from : {Data[0].trekStartDate}</CardText>
                                <Link to={`/eventDetail/1`}><Button color="primary">Register</Button></Link>
                            </CardBody>
                        </Card>
                        <Card className="mb-2">
                            <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" />
                            <CardBody>
                                <CardTitle>{Data[1].trekName}</CardTitle>
                                <CardText>{Data[1].trekDescription}</CardText>
                                <CardText>Trek starting from : {Data[1].trekStartDate}</CardText>
                                <Link to={`/eventDetail/2`}><Button color="primary">Register</Button></Link>
                            </CardBody>
                        </Card>
                        <Card className="mb-2">
                            <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" />
                            <CardBody>
                                <CardTitle>{Data[2].trekName}</CardTitle>
                                <CardText>{Data[2].trekDescription}</CardText>
                                <CardText>Trek starting from : {Data[2].trekStartDate}</CardText>
                                <Link to={`/eventDetail/3`}><Button color="primary">Register</Button></Link>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </section>
            </div>
        );
    }
}

export default UpcomingTrekPage;