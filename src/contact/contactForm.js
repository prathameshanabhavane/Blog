import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';

class ContactForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            number: '',
            message: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { name, email, number, message } = this.state
        let templateParams = {
            from_name: email,
            to_name: 'prathamesh@achieveee.com',
            subject: 'Test Mail',
            message_html: 'Thanks',
        }
        emailjs.send(
            'gmail',
            'template_btnUAxv5',
            templateParams,
            'user_WWKhMVcJMDQ9fGgcaWYfI'
        )
        this.resetForm()
    }

     resetForm = () => {
        this.setState({
            name: '',
            email: '',
            number: '',
            message: '',
        })
    }

    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
    }


    render() {
        return(
            <React.Fragment>
                <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto text-left">
                        <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
                            <form name="sentMessage" id="contactForm" onSubmit={this.handleSubmit}>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls">
                                        <label>Name</label>
                                        <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleChange.bind(this, 'name')} placeholder="Name" id="name"/>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls">
                                        <label>Email Address</label>
                                        <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleChange.bind(this, 'email')} placeholder="Email Address" id="email" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group col-xs-12 floating-label-form-group controls">
                                        <label>Phone Number</label>
                                        <input type="tel" className="form-control" name="number" value={this.state.number} onChange={this.handleChange.bind(this, 'number')} placeholder="Phone Number" id="phone"/>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                <div className="form-group floating-label-form-group controls">
                                    <label>Message</label>
                                        <textarea rows="5" className="form-control" name="message" value={this.state.message} onChange={this.handleChange.bind(this, 'message')} placeholder="Message" id="message" required data-validation-required-message="Please enter a message."></textarea>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <br />
                                <div id="success"></div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary" id="sendMessageButton">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ContactForm;
