import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import "./footer.css"
import fb from "./imgs/facebook.png"
import insta from "./imgs/insta.png"
import twitter from "./imgs/twitter.png"
import linkdin from "./imgs/linkdin.png"

class Footer extends React.Component {
    render() {
        return <>
            <div className="container_main_div">
                <Container className="">
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
                            <Col className="col2">
                                <p className="col1_heading">
                                    POPULAR BRANDS
                        </p>
                                <div className="list_items">
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
                            <Col className="col3">
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
                            <Col className="col4">
                                <p className="col1_heading">
                                    Follow us
                        </p>
                                <div className="footer_contact_img_div">
                                    <img className="footer_contact_img" src={fb} alt="" />
                                    <img className="footer_contact_img" src={insta} alt="" />
                                    <img className="footer_contact_img" src={twitter} alt="" />
                                    <img className="footer_contact_img" src={linkdin} alt="" />
                                </div>
                            </Col>
                        </div>
                    </Row>
                </Container>
                </div>
        </>
    }
}

export default Footer;