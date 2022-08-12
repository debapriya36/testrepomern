import React, { useState } from "react";
import "./AddPost.css";
import uniqid from "uniqid";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


export default function AddPost() {

   const navigate=useNavigate();



  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  function addBlog() {
    let blog = {
      title: title,
      imageUrl: imageUrl,
      description: description,
      postId: uniqid(),
    };

    console.log(blog);

    axios
      .post("/api/post/addnewpost", blog)
      .then((res) => {
        alert(res.data);
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div style={{ backgroundSize: "cover" }}>
      <div className="row justify-content-center">

      
   

        <div className="col-md-6">
        <a href="/" className='btn btn-info btn-lg'> See Blog</a>
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
            onClick={addBlog}
            className="btn btn-success btn-lg float-right"
          >
            {" "}
            Add Blog
          </button>
        </div>
        
      </div>

    </div>
  );
}
