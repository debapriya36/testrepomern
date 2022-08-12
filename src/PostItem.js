import React from 'react'
import axios from 'axios'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link , useNavigate } from 'react-router-dom';

export default function PostItem({i}) {

  const navigate=useNavigate();

  function deletepost(postId){

     axios.post('/api/post/deletepost',{postId : postId}).then(res=>{
      console.log(res);
      alert(res.data);
      // navigate(0);
  
     }).catch(err=>{
      console.log(err);
     })

  }

  return (
    <div className="col-md-8 shadow p-3 mb-5 bg-white rounded">

        <h2 className='p-1'>{i.title}</h2>
        <img src={i.imageUrl} alt="img-not-found" className='img-fluid p-1' />
         <p className='p-1'>{i.description}</p>
         <Link to={`/editpost/${i.postId}`}> <li className='btn btn-warning'>Edit</li></Link>
         <button  style ={{margin : '7px'}} className='btn btn-danger'  onClick={()=>{deletepost(i.postId)}}>Delete</button>
    </div>
  )
}

