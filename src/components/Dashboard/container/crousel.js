import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./imgs/img1.jpg"
import img2 from "./imgs/img2.jpg"
import img3 from "./imgs/img 3.jpeg"
import img4 from "./imgs/img4.jpeg"

class SimpleSlider extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            fade: true,
            lazyload:"progressive",
        };
        return (
            <Slider {...settings} style={{
                overflow: "hidden"
            }}>

                <div>
                    <img style={{ width: "100%" }} src={img1} alt="" />
                </div>
                <div>
                    <img style={{ width: "100%" }} src={img1} alt="" />
                </div>

            </Slider>
        );
    }
}
export default SimpleSlider;