import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPost: null,
        selectedPost: null,
        posts: [
            {
                id: 1,
                title: 'Post 1',
                author: 'Zakuan'
            },
            {
                id: 2,
                title: 'Post 2',
                author: 'Zakuan'
            },
            {
                id: 3,
                title: 'Post 3',
                author: 'Zakuan'
            }
        ]
    }

    componentDidMount() {
        this.loadData();
    }


    componentDidUpdate () {
        // if ( this.props.id ) {
        //     if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id) ) {
        //         axios.get( '/posts/' + this.props.id )
        //             .then( response => {
        //                 // console.log(response);
        //                 this.setState( { loadedPost: response.data } );
        //             } );
        //     }
        // }

        this.loadData();
    }

    loadData() {
        console.log(this.props.match.params.id)
        if (this.props.match.params.id) {
            if (!this.state.loadedPost) {
                this.setState({
                    loadedPost: {...this.state.posts.filter(post => post.id === parseInt(this.props.match.params.id, 10))[0]}
                })
            } else {
                if (this.state.loadedPost.id !== parseInt(this.props.match.params.id, 10) ) {
                    const selectedPost = this.state.posts.filter(post => post.id === parseInt(this.props.match.params.id, 10))[0];
                    if (selectedPost) {
                        this.setState({
                            loadedPost: {...this.state.posts.filter(post => post.id === parseInt(this.props.match.params.id, 10))[0]}
                        })
                    }
          
                }
            }
       
        }
 
    }

    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.id)
            .then(response => {
                console.log(response);
            });
    }

    render () {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if ( this.props.id ) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if ( this.state.loadedPost ) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;