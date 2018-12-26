import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'mdbreact'

const Duration = (props) => {
    return (
        <Card className="text-center" style={{border: "1px solid #ccc"}}>
            <CardBody>
                <CardTitle>Duration</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            </CardBody>
        </Card>
    )
}

export default Duration