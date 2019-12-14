import React, { Component } from 'react';

class PostGrid extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { posts } = this.props;
        return(
            <React.Fragment>
                {posts.map((post, index) =>
                    <div className="post-preview">
                        <a href="post.html">
                          <h2 className="post-title">
                            Man must explore, and this is exploration at its greatest
                          </h2>
                          <h3 className="post-subtitle">
                            Problems look mighty small from 150 miles up
                          </h3>
                        </a>
                        <p className="post-meta">Posted by
                          <a href="#">Start Bootstrap</a>
                          on September 24, 2018</p>
                          <hr />
                    </div>
                )}
            </React.Fragment>
        );
    }
}


export default PostGrid;
