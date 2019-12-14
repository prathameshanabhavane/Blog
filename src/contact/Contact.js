import React, { Component } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Banner from '../common/Banner';
import ContactForm from './contactForm';

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            title : 'Contact Me',
            subHeading : 'Have questions? I have answers.',
            backgroundImage: `url('img/home-bg.jpg')`,
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
                    <ContactForm />
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Contact;
