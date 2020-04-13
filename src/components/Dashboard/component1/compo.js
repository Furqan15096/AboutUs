import React from 'react';
import { Container } from 'reactstrap';
import "./compo.css"
class Example extends React.Component {
    render() {
        return (
            <>

                <Container className="themed-container" fluid={true}>

                    <div className="story_main_container">
                        {/* <div className="border"> */}
                            <div className="inner_border_div">

                        
                        <div className="inner_div">
                            <div className="pic_div">
                        <img className="img_div" 
                        src="https://cdn.lulusar.com/media/wysiwyg/Screen_Shot_2019-01-15_at_3.18.20_PM.png" alt=""/>

                            </div>


                            <div className="text_div">

                                <h1 className="header_text">
                                DAILY FUSION WEAR <br/> FOR FASHION <br/> CONSCIOUS WOMEN
                                </h1>
                                <h2 className="text">
                                Our products are minimal yet experimental, functional yet versatile and most importantly affordable.
                                 For fresh aesthetics and timeless elegance Lulusar is your only choice.
                                </h2>

                            </div>
                            

                        </div>
                        
                        </div>

    
                        {/* </div> */}
                    </div>
                    <div className="border">

                    </div>

                </Container>
            </>
        );
    }
}

export default Example;