import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <React.Fragment>
                <div className="container">
                <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white border-bottom box-shadow fixed-top">
                  <h5 className="my-0 mr-md-auto font-weight-normal"><Link to="/">Blog Logo</Link></h5>
                  <nav className="my-2 my-md-0 mr-md-3">
                    <Link className="p-2" to="/">Home</Link>
                    <Link className="p-2" to="/about">About</Link>
                    <Link className="p-2" to="/post">Post</Link>
                    <Link className="p-2" to="/contact">Contact</Link>
                  </nav>
                  <a className="btn btn-outline-primary" href="#">Sign up</a>
                </div>
                </div>
            </React.Fragment>
        );
    }
}


export default Header;
