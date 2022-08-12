import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './EditPost.css';
import { useParams , useNavigate } from 'react-router-dom';


export default function EditPost() {


  const navigate=useNavigate();


  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");


  function editblog()
  {
    const updatedpost={
      title : title,
      imageUrl : imageUrl,
      description : description,
      postId : params.postId
    }

    axios.post('/api/post/updatepost', updatedpost).then(res=>{
      console.log(res);
      alert(res.data[0]);
      navigate('/');
    }).catch(err=>{
      console.log(err);
    })



    
  }
  const params = useParams()

   useEffect(()=>{
    axios.post('/api/post/getpostdata',{postId : params.postId}).then(res=>{
      console.log(res);
      setTitle(res.data[0].title);
      setImageUrl(res.data[0].imageUrl);
      setDescription(res.data[0].description);

    }).catch(err=>{
      console.log(err);
    })
   },[])


  return (
    <div className='row justify-content-center'>
      
      <div className="col-md-6">
          <input
            type="text"
            placeholder="blog title"
            className="form-control"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="img url"
            className="form-control"
            value={imageUrl}
            onChange={(e) => {
              setImageUrl(e.target.value);
            }}
          />

          <textarea
            className="form-control"
            cols="30"
            rows="10"
            placeholder="blog description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <button
            onClick={editblog}
            className="btn btn-success btn-lg float-right"
          >
            {" "}
            Edit Blog
          </button>
        </div>
    </div>
  )
}
