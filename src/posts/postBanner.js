import React, { Component } from 'react';

class PostBanner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { postTitle, postSubHeading, postAuthor, postDate } = this.props;
        return(
            <React.Fragment>
                <header className="masthead" style={{backgroundImage: `url('img/post-bg.jpg')`}}>
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-10 mx-auto text-left">
                                <div className="post-heading">
                                    <h1>{postTitle}</h1>
                                    <h2 className="subheading">{postSubHeading}</h2>
                                    <span className="meta">Posted by
                                    <a href="#">{postAuthor}</a>
                                    on {postDate}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}


export default PostBanner;
