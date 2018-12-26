import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";

const FooterPage = () => {

  return (
    <Footer color="primary-color" className="font-small pt-0">
      <Container>
        <Row className="pt-5 mb-3 text-center d-flex justify-content-center">
          <Col md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <p>About us</p>
            </h6>
          </Col>
          <Col md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <p>Products</p>
            </h6>
          </Col>
          <Col md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <p>Awards</p>
            </h6>
          </Col>
          <Col md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <p>Help</p>
            </h6>
          </Col>
          <Col md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <p>Contact</p>
            </h6>
          </Col>
        </Row>
        <hr className="rgba-white-light" style={{ margin: "0 15%" }} />
        <Row className="d-flex text-center justify-content-center mb-md-0 mb-4">
          <Col md="8" sm="12" className="mt-5">
            <p style={{ lineHeight: "1.7rem" }}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae
              vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur.
              </p>
          </Col>
        </Row>
        <hr
          className="clearfix d-md-none rgba-white-light"
          style={{ margin: "10% 15% 5%" }}
        />
        <Row className="pb-3">
          <Col md="12">
            <div className="mb-5 flex-center">
              <p className="fb-ic">
                <i className="fa fa-facebook fa-lg white-text mr-md-4"> </i>
              </p>
              <p className="tw-ic">
                <i className="fa fa-twitter fa-lg white-text mr-md-4"> </i>
              </p>
              <p className="gplus-ic">
                <i className="fa fa-google-plus fa-lg white-text mr-md-4">
                  {" "}
                </i>
              </p>
              <p className="li-ic">
                <i className="fa fa-linkedin fa-lg white-text mr-md-4"> </i>
              </p>
              <p className="ins-ic">
                <i className="fa fa-instagram fa-lg white-text mr-md-4"> </i>
              </p>
              <p className="pin-ic">
                <i className="fa fa-pinterest fa-lg white-text"> </i>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-copyright text-center py-3">
        <Container fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.google.com"> Satish Khobragade </a>
        </Container>
      </div>
    </Footer>
  );
}

export default FooterPage;