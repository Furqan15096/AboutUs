import React from "react";
import img1 from "./imgs/img1.png"
import img2 from "./imgs/img2.png"
import img3 from "./imgs/img3.png"
import img4 from "./imgs/img4.png"
import "./collection.css"




class Collection extends React.Component {
    render() {
        return <>

            <div className="collection_main_div">

                <div className="collection_text_div">
                    <p className="collection_text">
                        Featured Collection
                </p>

                </div>
                <div className="collection_imgs_main_div">
                    <div className="inner_collec_img_div">
                        <div className="collec_img_div">
                            <img className="collec_img" src={img1} alt="" />
                        </div>
                        <div className="collec_text_div">
                            <p className="collec_name">
                                House Doctor
                            </p>
                            <p className="collec_exp">
                                Wood up Shelf and Stand
                            </p>
                            <p className="collec_price">
                                $18
                            </p>
                            <div className="collec_stat">
                                <div className="collec_circle_div">
                                </div>
                                <span className="collec_circle_text_div">
                                    Only 1 Unit Left   
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="inner_collec_img_div">
                        <div className="collec_img_div">
                            <img className="collec_img" src={img2} alt="" />
                        </div>
                        <div className="collec_text_div">
                            <p className="collec_name">
                                House Doctor
                            </p>
                            <p className="collec_exp">
                                Wood up Shelf and Stand
                            </p>
                            <p className="collec_price">
                                $18
                            </p>
                            <div className="collec_stat">
                                <div className="collec_circle_div">
                                </div>
                                <span className="collec_circle_text_div">
                                    Only 1 Unit Left   
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="inner_collec_img_div">
                        <div className="collec_img_div">
                            <img className="collec_img" src={img3} alt="" />
                        </div>
                        <div className="collec_text_div">
                            <p className="collec_name">
                                House Doctor
                            </p>
                            <p className="collec_exp">
                                Wood up Shelf and Stand
                            </p>
                            <p className="collec_price">
                                $18
                            </p>
                            <div className="collec_stat">
                                <div className="collec_circle_div">
                                </div>
                                <span className="collec_circle_text_div">
                                    Only 1 Unit Left   
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="inner_collec_img_div">
                        <div className="collec_img_div">
                            <img className="collec_img" src={img4} alt="" />
                        </div>
                        <div className="collec_text_div">
                            <p className="collec_name">
                                House Doctor
                            </p>
                            <p className="collec_exp">
                                Wood up Shelf and Stand
                            </p>
                            <p className="collec_price">
                                $18
                            </p>
                            <div className="collec_stat">
                                <div className="collec_circle_div">
                                </div>
                                <span className="collec_circle_text_div">
                                    Only 1 Unit Left   
                                </span>
                            </div>
                        </div>
                    </div>


                </div>

            </div>


        </>
    }
}

export default Collection