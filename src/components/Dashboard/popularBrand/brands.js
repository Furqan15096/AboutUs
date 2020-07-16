import React from 'react';
import img1 from "./imgs/img1.png";
import img2 from "./imgs/img2.png"
import "./brands.css"

class Brands extends React.Component {
    render() {
        return (
            <div className="brand_text_main_div">
                <div className="brand_text_div">
                    <p className="brand_text">
                        Popular Brands
                    </p>
                </div>
                <div className="brand_main_div">
                    <div className="brand_img1">
                        <img className="brand_imgs" src={img1} alt="" />
                    </div>
                    <div className="brand_img2">
                        <img className="brand_imgs" src={img2} alt="" />
                    </div>
                    <div className="brand_img1">
                        <img className="brand_imgs" src={img1} alt="" />
                    </div>
                    <div className="brand_img2">
                        <img className="brand_imgs" src={img2} alt="" />
                    </div>
                    <div className="brand_img1">
                        <img className="brand_imgs" src={img1} alt="" />
                    </div>
                    <div className="brand_img2">
                        <img className="brand_imgs" src={img2} alt="" />
                    </div>
                </div>
            </div>
        );
    }
}
export default Brands;