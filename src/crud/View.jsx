import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { VscHome } from "react-icons/vsc";
function View() {
    const [resData,setResData]=useState([])
    const {id}=useParams();
    useEffect(()=>{
        axios.get(`http://localhost:5000/articles/${id}`)
        .then(res=>{
            setResData(res.data);
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
  return (
    <div className='card'>
        <h1>{resData.title}</h1>
        <p>{resData.msg}</p>
        <br/>
        <Link to="/" className='btn'><VscHome /> Back</Link>
    </div>
  )
}

export default View