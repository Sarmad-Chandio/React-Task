import React from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/newPost';
import './Blog.css';

const  Blog=()=>{
   
        return (
            <div>
                <section className="Posts">
                    <Post />
                    <Post />
                    <Post />
                </section>
                <section>
                <FullPost />
                </section>
                <section>
                <NewPost />
                </section>
            </div>
        );
    
}

export default Blog;