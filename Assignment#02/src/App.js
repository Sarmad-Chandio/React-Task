 import React ,{useEffect, useState} from 'react';
import Post from './components/post';
import Comment from './components/comment';
import Email from './components/email';
//stateless functional component
export default function App () {
  const[ resourceType , setResourceType ]=useState('post')
  

useEffect(()=>{
 console.log(resourceType)
 console.log("with argument")
}
  
  ,[resourceType])/*with resourceType or we can use without resourceType
                if we use any target value in an array then useEffect hook will work as componentDidUpdate()
                  */
  useEffect(()=>{
   
    console.log("without argument")
   }
     
     ,[]) /*with no any targeted value in an array 
            if we use UseEffect hook  with an empty array as a second argument then it will work as componentDidMount()
              */
  
  return(
    <>
      <div>
       <button onClick={()=>setResourceType('post')}>POST</button>
       <button onClick={()=>setResourceType('comment')}>COMMENT</button>
       <button onClick={()=>setResourceType('email')}>EMAIL</button>
        
      </div>
      
      {resourceType==="post"?<Post/>:resourceType==="comment"?<Comment/>:resourceType==="email"?<Email/>:"Not found"}
      <br/>
      
    </>

  )
}
