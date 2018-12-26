import React from 'react';
import {Card, CardBody, Fa, CardGroup } from 'mdbreact';
import Avatar from '@material-ui/core/Avatar'

const ReviewsPage = () => {

    const styles = {
        width: "150px",
        height: "150px",
        alignSelf: "center"
    }
    return (
        <div id="reviews">
            <section className="text-center my-5">
                <h2 className="h1-responsive font-weight-bold my-5">What our customers say</h2>

                <CardGroup deck>
                    <Card>
                        <Avatar style={styles} src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg" />
                        <CardBody>

                            <h4 className="font-weight-bold mt-4">Aditya Kolluru</h4>
                            <h6 className="blue-text font-weight-bold my-3">Web Designer</h6>
                            <p className="font-weight-normal"><Fa icon="quote-left" className="pr-2"></Fa>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur.</p>
                            <div className="grey-text">
                                <Fa icon="star"> </Fa>
                                <Fa icon="star"> </Fa>
                                <Fa icon="star"> </Fa>
                                <Fa icon="star"> </Fa>
                                <Fa icon="star-half-full"> </Fa>
                            </div>

                        </CardBody>
                    </Card>
                    <Card>
                        <Avatar style={styles} src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" />
                        <CardBody>
                            <h4 className="font-weight-bold mt-4">Ravi Kumar</h4>
                            <h6 className="blue-text font-weight-bold my-3">Web Developer</h6>
                            <p className="font-weight-normal"><Fa icon="quote-left" className="pr-2"></Fa>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis laboriosam.</p>
                            <div className="grey-text">
                                <Fa icon="star"> </Fa>
                                <Fa icon="star"> </Fa>
                                <Fa icon="star"> </Fa>
                                <Fa icon="star"> </Fa>
                                <Fa icon="star"> </Fa>
                            </div>
                        </CardBody>
                    </Card>

                    <Card>
                        <Avatar style={styles} src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" />
                        <CardBody>
                            <h4 className="font-weight-bold mt-4">Abhishek Kumar</h4>
                            <h6 className="blue-text font-weight-bold my-3">Photographer</h6>
                            <p className="font-weight-normal"><Fa icon="quote-left" className="pr-2"></Fa>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.</p>
                            <div className="grey-text">
                                <Fa icon="star" > </Fa>
                                <Fa icon="star"> </Fa>
                                <Fa icon="star"> </Fa>
                                <Fa icon="star"> </Fa>
                                <Fa icon="star-o"> </Fa>
                            </div>
                        </CardBody>
                    </Card>
                </CardGroup>

            </section>
        </div>
    );
}

export default ReviewsPage;