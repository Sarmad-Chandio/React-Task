import React,{useState} from 'react';

import './NewPost.css';

 const  NewPost=()=> {
   
    const [title,setTitle]=useState(' ');
    const [content,setContent]=useState(' ');
    const [author,setAuther]=useState('Max');


   
        return (
            <div className="NewPost">
                <h1>Add a Pos</h1>
                <label>Title</label>
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
                <label>Content</label>
                <textarea rows="4" value={content} onChange={(event) => setContent(event.target.value)} />
                <label>Author</label>
                <select value={author} onChange={(event) => setAuther(event.target.value)}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button>Add Post</button>
            </div>
        );
    }


export default NewPost;