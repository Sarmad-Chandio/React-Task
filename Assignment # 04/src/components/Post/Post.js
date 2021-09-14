import React,{useState, useEffect} from 'react';
import axios from 'axios'

import './Post.css';


//https://jsonplaceholder.typicode.com/posts

const post = () => {
    const[posts,setPosts]=useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error);
        })
    })
   

    return(
        <div>
            <ul>
                {
                    posts.map(post=>
                    <li key={post.id}>
                        {post.title}
                    </li>)
                }
            </ul>
            <article className="Post">
                <h1>Title</h1>
                <div className="Info">
                    <div className="Author">Author</div>
                </div>
            </article>
        </div>
    )
    }

export default post;
