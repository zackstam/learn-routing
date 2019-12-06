import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import { Link, Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {

    state = {
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

    componentDidMount () {
        // axios.get( '/posts' )
        //     .then( response => {
        //         const posts = response.data.slice(0, 4);
        //         const updatedPosts = posts.map(post => {
        //             return {
        //                 ...post,
        //                 author: 'Max'
        //             }
        //         });
        //         this.setState({posts: updatedPosts});
        //         // console.log( response );
        //     } )
        //     .catch(error => {
        //         // console.log(error);
        //         this.setState({error: true});
        //     });
    }


    postSelectedHandler = (id) => {
        console.log(id);
        this.setState({selectedPostId: id});
        // this.props.history.push({
        //     pathname: '/' + id
        // })
        this.props.history.replace('/posts/some/' + id);
    }
    
    render() { 
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {

                return (
                    // <Link key={post.id}  to={'/' + post.id}>
                     
                    // </Link>
                    <Post 
                    key={post.id}
                    title={post.title} 
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)} />
                );
            });
        }

        return (
            <>
                <section className="Posts">
                    {posts}
                </section>
                <Route path="/posts/some/:id" exact component={FullPost} />
            </>
        );
    }
}
 
export default Posts;