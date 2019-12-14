import React, { Component } from 'react';

class Banner extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { title, subHeading, bannerImagePath } = this.props;
        return(
            <React.Fragment>
                <div>
                    <header className="masthead" style={{backgroundImage: `url('img/home-bg.jpg')`}}>
                     <div className="overlay"></div>
                     <div className="container">
                       <div className="row">
                         <div className="col-lg-8 col-md-10 mx-auto">
                           <div className="site-heading">
                             <h1>{title}</h1>
                             <span className="subheading">{subHeading}</span>
                           </div>
                         </div>
                       </div>
                     </div>
                   </header>
                </div>
            </React.Fragment>
        );
    }
}


export default Banner;
