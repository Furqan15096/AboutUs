import React from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Simpleslider from "./container/crousel"
import Brand from "./popularBrand/brands"
import Collection from "./collection/collection"
import Circles from "./warehouse_first_detail_component/index"
import Cups from "./warehouse_site_circle_compoent/index"
import Footer from "./Footer/footer"


class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/" render={() => {
                    return <React.Fragment>
                        <Simpleslider/>
                        <Brand/>
                        <Collection/>
                        <Cups />
                        <Circles />
                        <Footer />                        
                    </React.Fragment>
                }
                }
                />
               


                
            </div>
        )
    }
}

export default Dashboard;