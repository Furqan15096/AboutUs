import React from "react"
import { Radio, Divider, Input, Tabs, Affix, Button, message } from "antd";
import "./featured.css"
// import { Tabs } from 'antd';

import abstract01 from "./Images/abstract01.png";
import abstract02 from "./Images/abstract02.png";
// import { connect } from "react-redux";
// import store from "../../../store/store";
// import { Url } from "../../../Endpoint/index";
// import Header2 from "../Header/header2";


const { TabPane , mode } = Tabs;

class Featured extends React.Component {
    render() {
        return <>
            {/* <div className="Featured_main_div"> */}

                <div className="grid_box">
                    <div className=" item1">
                        <div className="ant_tab">
                            <Tabs
                                defaultActiveKey="1"
                                  tabPosition={mode}
                                className="carousal"
                            >
                                <TabPane
                                    tab={
                                        <img
                                            // src={Url + item.file[0]}
                                            src={abstract01}
                                            alt="asdasd"
                                            width="80"
                                        />
                                    }
                                    key={1}
                                >
                                    <div
                                        className="carousalimg"
                                        style={{
                                            // backgroundImage: `url(${Url + item.file[0]})`,
                                            // backgroundImage: `url(require('./Images/abstract01.png'))`,
                                            // backgroundImage:"url(require('./Images/abstract01'))"    
                                        }}
                                    ></div>
                                </TabPane>
                                <TabPane
                                    tab={
                                        <img
                                            // src={Url + item.file[1]}
                                            src={abstract02}
                                            alt="asdasd"
                                            width="80"
                                        />
                                    }
                                    key={2}
                                >
                                    <div
                                        className="carousalimg"
                                        style={{
                                            // backgroundImage: `url(${Url + item.file[1]})`,
                                            backgroundImage: `url(require('./Images/abstract01.png'))`,
                                        }}
                                    ></div>
                                </TabPane>
                                <TabPane
                                    tab={
                                        <img
                                            // src={Url + item.file[2]}
                                            src={abstract01}
                                            alt="asdasd"
                                            width="80"
                                        />
                                    }
                                    key={3}
                                >
                                    <div
                                        className="carousalimg"
                                        style={{
                                            // backgroundImage: `url(${Url + item.file[2]})`,
                                            // backgroundImage: Url(),
                                            backgroundImage: `url(require('./Images/abstract02.png'))`,
                                        }}
                                    ></div>
                                </TabPane>
                            </Tabs>
                            <Divider />
                        </div>
                    </div>

                    <div className="grid_items">
                        <div className="item_pricing_details">
                            <h1 className="item_Name">Title</h1>
                            <p className="item_Description">Description</p>
                            <p className="item_Price">
                                Rs &nbsp;
                      {/* {item.price} */}
                      Price
                      &nbsp; only
                    </p>
                            <del className="item_Price">
                                Rs &nbsp;
                      {/* {item.saleprice} */}
                      Sales Price
                      &nbsp; only
                    </del>
                            <Divider />
                            <div>

                                <h5 style={{ marginTop: "10px" }}>Quantity</h5>
                                <div className="items" style={{ margin: "10px" }}>
                                    <Button
                                        //   disabled={this.state.qnty < 2}
                                        className="btn-1"
                                    //   onClick={() => this.subtract(item)}
                                    >
                                        -
                        </Button>
                                    {/* <Button className="btn-2">{this.state.count}</Button> */}
                                    <span
                                        style={{
                                            width: "30px",
                                            padding: "0px",
                                            textAlign: "center",
                                            border: "0",
                                        }}
                                        size="default"
                                    >
                                        &nbsp;
                          {/* {this.state.qnty}  */}
                          qnty
                          &nbsp;
                        </span>
                                    <Button
                                        className="btn-3"
                                    //   onClick={() => this.add(item)}
                                    >
                                        +
                        </Button>
                                </div>
                                <Button
                                    style={{
                                        backgroundColor: "#182e49",
                                        color: "white",
                                        width: "100%",
                                        height: "40px",
                                        marginTop: "20px",
                                    }}
                                // onClick={() =>
                                //   this.addTocartItem(
                                //     item.price,
                                //     item.description,
                                //     item.title,
                                //     item.file,
                                //     this.state.qnty,
                                //     openMessage()
                                //   )
                                // }
                                >
                                    Add to cart
                      </Button>
                                <Divider />
                            </div>
                        </div>
                    </div>
                </div>


            {/* </div> */}

        </>
    }
}

export default Featured

