import React, { Component } from 'react';
import PostGrid from './postsGrid';

class AllPosts extends Component {
    constructor() {
        super()
    }

    render() {
        const posts = [1,2,3,4,5];
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <PostGrid posts={posts} />
                            <div className="clearfix">
                                <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default AllPosts;
