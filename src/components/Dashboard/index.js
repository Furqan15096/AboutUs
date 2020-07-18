import React from "react";
import Simpleslider from "./container/crousel"
import { BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom'
import Brand from "./popularBrand/brands"
import Collection from "./collection/collection"
import Circles from "./warehouse_first_detail_component/index"
import Cups from "./warehouse_site_circle_compoent/index"
import Footer from "./Footer/footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import Featured from "./Featured/featured"

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <Route
                    exact
                    path="/"
                    render={() => {
                        return (
                            <React.Fragment>
                                <Simpleslider />
                                <Brand />
                                <Collection />
                                <Cups />
                                <Circles />
                                <Footer /> 
                                {/* <Featured /> */}
                            </React.Fragment>
                        );
                    }}
                />
                <Route path="abc"
                component={ Featured } />
            </BrowserRouter>
            </div>
        );
    }
}

export default Dashboard;
