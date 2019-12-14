import React, { Component } from 'react';
import Header from '../common/Header';

class NotFound extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <React.Fragment>
                <Header />
                <div>
                    <h1>
                        Page Not found
                    </h1>
                </div>
            </React.Fragment>
        );
    }
}


export default NotFound;
