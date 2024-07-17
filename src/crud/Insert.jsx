import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Insert() {

    // const [count,setCount]=useState({id:""})


    const [resData,setResData]=useState({title:"",msg:""})

    // useEffect(()=>{
    //     axios.get("http://localhost:5000/articles")
    //     .then(res=>{
    //         setCount(res.data)
    //     }
    //     )
    //     .catch(err=>{
    //         console.log(err)
    //     })
    // },[])


    // let res=count.length;


    const submitHandler=(e)=>{
        e.preventDefault();
        console.log("test");
        axios.post("http://localhost:5000/articles",resData)
    }


  return (
    <div className='mid'>
       
        <h1>Insert The Post</h1>
        <form onSubmit={submitHandler} method="post">
            
            <input 
                type='text' 
                placeholder='Enter Post Title'
                value={resData.title}
                onChange={(e)=>setResData({...resData,title:e.target.value})}
            />
            <textarea
            value={resData.msg}
            onChange={(e)=>setResData({...resData,msg:e.target.value})}
            >

            </textarea>
            <button className='btn'>Insert Data</button>
        </form>
        <h1>
            {JSON.stringify(resData)}
        </h1>







    </div>
  )
}

export default Insert