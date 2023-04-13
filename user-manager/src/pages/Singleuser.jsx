import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Singleuser = () => {

    const [singleuser,setsingleuser]=useState(null)
    const {id}=useParams()
    console.log(id)
    const  fetsingleuser=()=>{
        axios.get(`https://reqres.in/api/users/${id}`)
        .then((res)=>{
            // console.log(res)
            setsingleuser(res.data.data)

        })
        .catch((err)=>{
            // console.log(err)
            alert("Something went wrong") //alert if error from api 
        })
    }

    useEffect(()=>{
        fetsingleuser()
    },[])

  return (
    <div>
        {
            singleuser!==null&&<div>
            <img src={singleuser.avatar}></img>
            <p>Name : {`${singleuser.first_name} ${singleuser.last_name}`}</p>
            <p>Email : {singleuser.email}</p>
        </div>
        }
    </div>
  )
}

export default Singleuser