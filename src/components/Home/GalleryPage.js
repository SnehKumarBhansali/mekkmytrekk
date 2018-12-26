import React from 'react'
import { Card, CardGroup, Modal, CardImage, ModalFooter, Button } from 'mdbreact'

class GalleryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            modalData: undefined
        };
    }

    toggle = (src) => {
        if (src) {
            this.setState((prevState) => {
                return {
                    modal: !prevState.modal,
                    modalData: src
                }
            })
        }
    }


    render() {
        const pic1 = "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
        const pic2 = "https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg"
        const pic3 = "https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg"
        const pic4 = "https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg"
        const pic5 = "https://mdbootstrap.com/img/Photos/Slides/img%20%28143%29.jpg"
        const pic6 = "https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2821%29.jpg"
        const pic7 = "https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
        return (
            <div id="gallery">
                <section className="text-center my-5">
                    <h2 className="h1-responsive font-weight-bold my-5">Gallery</h2>
                    <CardGroup column>
                        <Card onClick={() => this.toggle(pic1)}>
                            <CardImage
                                top
                                src={pic1}
                            />
                        </Card>
                        <Card onClick={() => this.toggle(pic2)}>
                            <CardImage
                                top
                                src={pic2}
                            />
                        </Card>
                        <Card onClick={() => this.toggle(pic3)}>
                            <CardImage
                                top
                                src={pic3}
                            />
                        </Card>

                        <Card onClick={() => this.toggle(pic4)}>
                            <CardImage
                                top
                                src={pic4}
                            />
                        </Card>

                        <Card onClick={() => this.toggle(pic5)}>
                            <CardImage
                                top
                                src={pic5}
                            />
                        </Card>

                        <Card onClick={() => this.toggle(pic6)}>
                            <CardImage
                                top
                                src={pic6}
                            />
                        </Card>

                        <Card onClick={() => this.toggle(pic7)}>
                            <CardImage
                                top
                                src={pic7}
                            />
                        </Card>

                    </CardGroup>
                    <Modal isOpen={this.state.modal} toggle={() => this.toggle()} size="fluid">

                        <img src={this.state.modalData} alt=''/>

                        <ModalFooter>
                            <Button color="primary" onClick={(event) => this.toggle(event)}>Close</Button>
                        </ModalFooter>
                    </Modal>
                </section>
            </div>
        )
    }
}

export default GalleryPage;