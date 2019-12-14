import React, { Component } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Banner from '../common/Banner';
import AboutContent from './aboutContent';

class About extends Component {
    constructor() {
        super();
        this.state = {
            title : 'About Me',
            subHeading : 'This is what I do.',
            backgroundImage: `url('img/home-bg.jpg')`,
        }
    }

    render() {
        const { title, subHeading, bannerImagePath } = this.state;
        return(
            <React.Fragment>
            <Header />
                <div>
                    <Banner title={title} subHeading={subHeading} bannerImagePath={bannerImagePath}   />
                    <AboutContent />
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}


export default About;
