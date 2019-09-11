import React, { Component } from 'react';

import Header from '../components/header';
import InspectionList from '../components/InspectionsList';

class Home extends Component{
 
    render() {
        return(
            <div className="content">
                <Header />
                <InspectionList />
            </div>
        );
    }
}

export default Home;