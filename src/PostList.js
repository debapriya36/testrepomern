import React, { useState, useEffect } from 'react'
import PostItem from './PostItem'
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function PostList() {

  const navigate=useNavigate();

  const[postitem,setPostitem]=useState([]);


   useEffect(()=>{

    axios.get('/api/post/getposts').then(res=>{
      console.log(res.data);
      setPostitem(res.data);
       
    }).catch(err=>{
     console.log(err);
    })

   },[])

   const postlist=postitem.map(i=>{
    return (
      <div key={i.postId} className='row justify-content-center'>
        <PostItem  i={i}/>
      </div>
    )
   })

  return (
    <div >
   
      <div>
      <a href='/addpost' className='btn btn-primary btn-lg m-3'>Add Blog </a>
      </div>
        {postlist}

        <h2 style={{backgroundColor : 'black', color : 'white', position: 'sticky'}}>
          Mave with love By DC
        </h2>
    </div>
  )
}
