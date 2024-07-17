import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { VscHome } from "react-icons/vsc";
function Edit() {
    const navigate=useNavigate()
    
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

    const submitHandler=()=>{
        axios.put(`http://localhost:5000/articles/${resData.id}`,resData)
        navigate('../')
    }
  return (
    <div className='mid'>
        
        <form  method="post">
            <input 
                type='text' 
                placeholder='Enter User Name'
                value={resData.id}
                onChange={(e)=>setResData({...resData,id:e.target.value})}
            />
            <input 
                type='text' 
                placeholder='Enter Mobile'
                value={resData.title}
                onChange={(e)=>setResData({...resData,title:e.target.value})}
            />
            <textarea
            value={resData.msg}
            onChange={(e)=>setResData({...resData,msg:e.target.value})}
            >
            </textarea>
            <button className='btn' onClick={submitHandler}>Update Data</button>
        </form>
        <br/>
        <Link to="/" className='btn'><VscHome /> Back</Link>
    </div>
  )
}

export default Edit