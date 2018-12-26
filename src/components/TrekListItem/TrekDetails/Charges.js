import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'mdbreact'

const Charges = (props) => {
    return (
        <Card className="text-center" style={{border: "1px solid #ccc"}}>
            <CardBody>
                <CardTitle>Charges</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            </CardBody>
        </Card>
    )
}

export default Charges