import React from 'react';
// import "./compo.css"
import img1 from "./imgs/img1.png";
import img3 from "./imgs/search.png"
import img4 from "./imgs/2.png"
class Example extends React.Component {
    render() {
        return (
            <>
                <div classNameName="project_main_div">
                    <div classNameName="main_div_header">
                        <div classNameName="first_header_main_div">
                            <div classNameName="text_div">
                                <p classNameName="text">
                                    Free shippingon orders over $200
                           </p>
                            </div>
                            <div classNameName="number_logo_div">
                                <div classNameName="logo_div">
                                    <img classNameName="img_div" src={img1} alt="" />
                                </div>
                                <div classNameName="number">
                                    <p classNameName="number"> 03006674004 </p>
                                </div>
                            </div>
                        </div>
                        <div classNameName="scnd_header_main_div">
                            <div classNameName="ma_text_div">
                                MA Traders
                            </div>
                            
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default Example;