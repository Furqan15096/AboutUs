import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import "./footer.css"

class Footer extends React.Component {
    render() {
        return <>
            <Container className="container_main_div">
                <Row xs="1" sm="1" md="2" lg="4" >
                    <div className="col1">
                        <Col>
                            <p className="col1_heading">
                                ABOUT THE STORE
                    </p>
                            <p className="col1_para">
                                Our mission is to offer you the best selection of Nordic design,
                                whether well-established or up-and-coming. To give you the real
                                Nordic shopping experience. We will relentlessly follow what is
                                happening in Scandinavia and pick the coolest lifestyle items
                                for you, vintage or brand new.
                    </p>
                        </Col>
                    </div>
                    <div className="col1">
                        <Col>
                            <p className="col1_heading">
                                POPULAR BRANDS
                        </p>
                            <div>
                                <p>
                                    Eva Solo
                         </p>
                                <p>
                                    Eva Solo
                         </p>
                                <p>
                                    Eva Solo
                         </p>
                                <p>
                                    Eva Solo
                         </p>
                                <p>
                                    Eva Solo
                         </p>
                            </div>

                        </Col>
                    </div>
                    <div className="col1">
                        <Col>
                            <p className="col1_heading">
                                INFORMATION
                        </p>
                            <div>

                                <p>
                                    About us
                         </p>
                                <p>
                                    Contact us
                         </p>
                                <p>
                                    FAQ
                         </p>

                            </div>

                        </Col>
                    </div>
                    <div className="col1">
                        <Col>
                            <p className="col1_heading">
                                Follow us
                        </p>
                        </Col>
                    </div>
                </Row>
            </Container>
        </>
    }
}

export default Footer;