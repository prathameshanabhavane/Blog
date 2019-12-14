import React, { Component } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import PostBanner from './postBanner';
import PostContent from './postContent';

class Post extends Component {
    constructor() {
        super();
        this.state = {
            postTitle : 'Man must explore, and this is exploration at its greatest',
            postSubHeading : 'Problems look mighty small from 150 miles up',
            postAuthor: 'Start Bootstrap',
            postDate : 'August 24, 2018'
        }
    }

    render() {
        const { postTitle, postSubHeading, postAuthor, postDate } = this.state;
        return(
            <React.Fragment>
                <Header />
                <div>
                    <PostBanner
                        postTitle={postTitle}
                        postSubHeading={postSubHeading}
                        postAuthor={postAuthor}
                        postDate={postDate}
                    />
                    <PostContent />
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}


export default Post;
