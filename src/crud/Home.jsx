import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { GrView } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
function Home() {
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/articles")
        .then(res=>{
            setPosts(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    const list=posts.map(post=><div className='post' key={post.id}>
        <h1>{post.title}</h1>
        <p>{post.msg}</p>
        <ul>
            <li><Link to={`./view/${post.id}`}><GrView /> view</Link></li>
            <li><Link to={`./edit/${post.id}`}><FiEdit /> Edit</Link></li>
            <li><Link to={`./delete/${post.id}`}><MdDeleteOutline /> Delete</Link></li>
        </ul>
    </div>)
  return (
    <div className='row'>
        {list}
    </div>
  )
}
export default Home