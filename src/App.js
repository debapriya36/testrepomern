import logo from './logo.svg';
import './App.css';
import PostList from './PostList';
import AddPost from './AddPost';
import EditPost from './EditPost';
import PostItem from './PostItem';
import axios from 'axios';

import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter, Routes , Route } from 'react-router-dom';


export default function App() {
  return (
    <div  className="App">
        <h1 style={{color : 'white', backgroundColor : 'black' , fontSize:'49px'}}>MERN CRUD BLOG APP </h1>
        <BrowserRouter>
        <Routes>
        <Route exact path='' element={< PostList />}></Route>
        <Route exact path='/addpost' element={< AddPost />}></Route> 
        <Route exact path='/editpost/:postId' element={< EditPost />}></Route> 
        </Routes>
        </BrowserRouter>
    </div>
  );
}
