import React, { Component } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Banner from '../common/Banner';
import AllPosts from '../posts/allPosts';


class Home extends Component {
    constructor() {
        super()
        this.state = {
            title : 'Home Clean Blog',
            subHeading : 'A Blog Theme by Start Bootstrap',
            backgroundImage: true,
        }
    }


    render() {
        const { title, subHeading, bannerImagePath } = this.state;
        return(
            <React.Fragment>
                <Header />
                <div>
                    <Banner
                        title={title}
                        subHeading={subHeading}
                        bannerImagePath={bannerImagePath}
                    />
                    <AllPosts />
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}


export default Home;
